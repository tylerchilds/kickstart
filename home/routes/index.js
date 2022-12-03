export const handler = (req, res) => {
  return new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>After Shock, Wave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/styles/system.css" rel="stylesheet">
        <link href="/routes/rice.js" rel="stylesheet">
      </head>
      <body>
        <AfterShockWave>
          hello
        </AfterShockWave>
        <script type="module">
          import { on as enter2005 } from "/scripts/after-shock-wave.js"
          enter2005()
        </script>
        <script type="module" src="/build/bundle.js"></script>
      </body>
    </html>
  `, {
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  })
}
