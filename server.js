import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";
import { ensureFileSync } from "https://deno.land/std@0.165.0/fs/ensure_file.ts";
import { lookup } from "https://deno.land/x/media_types/mod.ts";
import { inject } from './system/utils.js'

const core = [
	'/system/bios.js',
	'/system/utils.js',
	'/system/devices.js',
	'/system/module.js',
	'/system/SecureRender.js',
	'/system/modal-module.js',
	'/build/bundle.js',
]

function system(firmware) {
	return async (_request, _context) => {

		const bios = await Deno.readFile(`.${firmware}`)

		return new Response(bios, {
			headers: {
				'content-type': 'text/javascript; charset=utf-8'
			},
		})
	}
}

async function router(request, context) {
	let { pathname } = new URL(request.url);

  if(pathname === '/') pathname = '/routes/index.js'

	if(core.includes(pathname)) {
		return system(pathname)(request, context)
	}

	try {
		if(request.method === 'PUT') {
			const { file } = await request.json()	
      ensureFileSync(`./home/${pathname}`)
			await Deno.writeTextFile(`./home/${pathname}`, file)	
			return new Response()
		}

		if(pathname.startsWith('/routes')) {
			const edge = await Deno.readTextFile(`./home/${pathname}`)
			const { handler } = await inject(edge)

			return await handler(request, context)
		}

		if(pathname.startsWith('/sprites')) {
			const file = await Deno.readFile(`./home/${pathname}`)

      return new Response(file, {
        headers: {
          'content-type': getType(pathname),
        },
      })
		}


		const file = await Deno.readTextFile(`./home/${pathname}`)

		return new Response(file, {
			headers: {
				'content-type': getType(pathname),
			},
		})
	} catch (e) {
		console.error(pathname + '\n' + e)
	}

	const func = `
		export const handler = (req, res) => {
			const body = '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<link href="/system.css" rel="stylesheet">' +
        '<bios></bios>' +
				'<script type="module" src="/system/bios.js"></script>' +
				'<script type="module" src="/build/bundle.js"></script>'

			return new Response(body, {
				headers: {
					'content-type': 'text/html; charset=utf-8'
				},
        status: ${Status.NotFound}
			})
		}
	`

	const { handler } = await inject(func)
	return await handler(request, context)
}

function getType(pathname) {
  return lookup(pathname);
}

serve(router);
console.log("Listening on http://localhost:8000");
