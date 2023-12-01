import dotenv from 'dotenv'
import statebus from 'statebus'
import express from 'express'
import bodyParser from 'body-parser'

dotenv.config()

const bus = statebus({
  client: (client) => {
    client.honk = 1
    client('profile/*', {
      get: (key) => {
        return client.state.current_user.logged_in
          ? bus.state[key] : null
      },
      set: (obj, t) => {
        const { key, val } = obj
        if(client.state.current_user.logged_in) {
          master.state[key] = val
        } else {
          t.abort()
        }
      }
    })

    client.shadows(bus)
  }
})

const app = express()
const port = 1989

app.get('/exec/*', async (req, res) => {
  const pathname = req.params[0]
  const defaultHandler = (req, res) => res.send('default handler')
  const {
    handler = defaultHandler
  } = await fetch(`http://localhost:1989/edge/${pathname}.js`)
    .then((response) => response.json())
    .then(async (data) => {
      console.log(data)
      if(!data || !data.file) return 'did we edgespect that??'
      const b64moduleData = "data:text/javascript;base64," + btoa(data.file);

      console.log(b64moduleData)
      return await import(b64moduleData);
    })

  console.log(handler)
  handler(req, res)
})

app.use(express.static('public'))

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', checkUser);

function checkUser(req, res, next) {
  const nonSecurePaths = ['/', '/about', '/contact'];
  // data is public by default-- not a rule, but an artistic liberty
  if (req.method === 'GET') return next()
  if (nonSecurePaths.includes(req.path)) return next()

  //authenticate user
  if(req.path.startsWith('/~')) {
    // if some token in the request matches the given user...
    return next()
  }

  res.send(401, 'Unauthorized');
}
*/

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use(bus.libs.http_in)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Setup the statebus!
bus.honk = 1                // Print handy debugging output
bus.libs.file_store()       // Persist state onto disk
