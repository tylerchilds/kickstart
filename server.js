import { serve }
	from "https://deno.land/std@0.114.0/http/server.ts";
import { parseMarkdown }
	from "https://deno.land/x/markdown_wasm/mod.ts"

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
	await Deno.writeTextFile(`./.${pathname}.autosave`, value)
	return await editor(request)
}

async function save(pathname, params) {
	const { value } = params
	await Deno.writeTextFile(`./${pathname}`, value)
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

	const isAutosave = pathname.split('.').slice(-1) === 'autosave'
	const extensionPosition = isAutosave ? -2 : -1

	if (pathname === '/') {
		const file = await Deno.readFile('README.md')
		return html(parseMarkdown(file))
	}

	if (pathname.endsWith('/edit')) {
    return await editor(request)
  }

  let file = ''

  try {
    file = await Deno.readFile(`.${pathname}`)
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

async function editor(request) {
	const { pathname } = new URL(request.url);
  const [realpath] = pathname.split('/edit')

	return html(
    await Deno.readFile(`${Deno.cwd()}/editor.html`)
  )
}

async function fourOH4(request) {
	const { pathname } = new URL(request.url);

  const file = await Deno.readFile(`${Deno.cwd()}/404.html`)
  await Deno.writeTextFile(`.${pathname}`, file);

  return html(
    await Deno.readFile(`.${pathname}`)
  )
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

console.log("Listening on http://localhost:8000");
serve(handleRequest);

const firefox = Deno.run({ cmd: [
  "firefox", "http://localhost:8000/README.md/edit"
] });
console.log({ firefox })
