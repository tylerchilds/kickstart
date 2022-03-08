import { serve }
from "https://deno.land/std@0.114.0/http/server.ts";
import { walk } from "https://deno.land/std/fs/mod.ts";

import sortPaths from "https://esm.sh/sort-paths"

const buildPath = `${Deno.cwd()}/build`

let state = {}
function select(selector, initialState) {
  state[selector] = { ...initialState }

  return {
    read: () => state[selector],
    write: (data) => {
      state = {
        ...state,
        [selector]: {
          ...state[selector],
          ...data
        }
      }
    }
  }
}

// get new paths and cache every 30 seconds
const $ = select('magic-textarea', { paths: [] })
crawl($)

const methods = {
  'GET': handleGet,
  'POST': handlePost,
}

const modes = {
  'autosave': autosave,
  'save': save,
}

async function autosave(pathname, params) {
  const { value } = params
  await Deno.writeTextFile(`./build/.${pathname}.autosave`, value)
  return await editor(request)
}

async function save(pathname, params) {
  const { value } = params
  await Deno.writeTextFile(`./build/${pathname}`, value)
  return await editor(request)
}

async function handleRequest(request) {
  return await (methods[request.method] || methods['GET'])(request)
}

async function handlePost(request) {
  const { pathname } = new URL(request.url);
  const params = await request.json()

  return (modes[params.mode] ||	function(){})(pathname, params)
}

async function handleGet(request) {
  const { pathname } = new URL(request.url);

  if(pathname === '/status') {
    return getStatus(request)
  }

  const isAutosave = pathname.split('.').slice(-1) === 'autosave'
  const extensionPosition = isAutosave ? -2 : -1

  if (pathname === '/') {
    const file = await Deno.readFile('./build/index.html')
    return html(file)
  }

  if (pathname.endsWith('/edit')) {
    return await editor(request)
  }

  let file = ''

  try {
    file = await Deno.readFile(`./build${pathname}`)
  } catch(e) {
    return await fourOH4(request)
  }

  const extension = pathname.split('.').slice(extensionPosition)

  return new Response(file, {
    headers: {
      'content-type': getType(extension),
    },
  })
}

async function getStatus(_request) {
  await crawl($)

  const data = $.read()
  const body = JSON.stringify(data, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

async function editor(_request) {
  return html(
    await Deno.readFile(`${buildPath}/editor.html`)
  )
}

async function fourOH4(request) {
  const { pathname } = new URL(request.url);

  try {
    const file = await Deno.readFile(`${buildPath}/404.html`)
    await Deno.writeFile(`.${pathname}`, file);

    return html(
      await Deno.readFile(`.${pathname}`)
    )
  } catch(e) {
    console.log(e)
  }
}

function html(content) {
  return new Response(content, {
    headers: {
      'content-type': getType('html'),
    },
  })
}

const types = {
  'css': 'text/css; charset=utf-8',
  'html': 'text/html; charset=utf-8',
  'js': 'text/javascript; charset=utf-8'
}

function getType(ext) {
  return types[ext] || types['html']
}

const byPath = (x) => x.path
const byName = (x) => x.name
async function crawl($, _flags) {
  let paths = []
  const files = walk(buildPath, {
    skip: [/\.git/, /\.autosave/],
    includeDirs: false
  })

  for await(const file of files) {
    const { name } = file
    const [_, path] = file.path.split(buildPath)
    paths.push({ path, name })
  }

  paths = sortPaths([...paths], byName, '/')
  $.write({ paths })
}

console.log("Listening on http://localhost:8000");
serve(handleRequest);
