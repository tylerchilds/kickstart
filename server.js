import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { inject } from './system/utils.js'

const core = [
	'/system/bios.js',
	'/system/utils.js',
	'/system/module.js',
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
	const { pathname } = new URL(request.url);

	if(core.includes(pathname)) {
		return system(pathname)(request, context)
	}

	try {

	if(request.method === 'PUT') {
		const { file } = await request.json()	
		await Deno.writeTextFile(`./home/${pathname}`, file)	
		return new Response()
	}

		if(pathname.startsWith('/routes')) {
			const edge = await Deno.readTextFile(`./home/${pathname}`)
			console.log(edge)
			const { handler } = await inject(edge)

			return await handler(request, context)
		}

		const file = await Deno.readTextFile(`./home/${pathname}`)
		return new Response(file)

	} catch (e) {
		console.error(pathname + '\n' + e)
	}

	const func = `
		export const handler = (req, res) => {
			const body = '<bios></bios>' +
				'<script type="module" src="/system/bios.js"></script>' +
				'<script type="module" src="/build/bundle.js"></script>'

			return new Response(body, {
				headers: {
					'content-type': 'text/html; charset=utf-8'
				}
			})
		}
	`

	const { handler } = await inject(func)
	return await handler(request, context)
}

serve(router);
console.log("Listening on http://localhost:8000");
