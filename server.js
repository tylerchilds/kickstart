import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";
import { ensureFileSync } from "https://deno.land/std@0.165.0/fs/ensure_file.ts";
import { lookup } from "https://deno.land/x/media_types/mod.ts";
import { inject } from './home/system/utils.js'
import { compile } from './home/system/ScriptType.js'
import { handler as scriptEditor} from './home/routes/script-editor.js'

function system(firmware) {
	return async (_request, _context) => {
		const process = await Deno.readFile(`${Deno.cwd()}/home${firmware}`)

		return new Response(process, {
			headers: {
				'content-type': 'text/javascript; charset=utf-8'
			},
		})
	}
}

async function router(request, context) {
	let { pathname } = new URL(request.url);

  if(pathname === '/') pathname = '/routes/index.js'

	try {
		if(request.method === 'PUT') {
			const { file } = await request.json()	
      ensureFileSync(`.${pathname}`)
			await Deno.writeTextFile(`.${pathname}`, file)	
			return new Response()
		}

    if(pathname.startsWith('/edit/')) {
			return scriptEditor(request, context)
    }

    if(pathname.startsWith('/view/')) {
      const link = `${Deno.cwd()}/home/customs/` + pathname.split('/view/')[1]
			const script = await Deno.readTextFile(link)

      return new Response(compile(script), {
        headers: {
					'content-type': 'text/html; charset=utf-8'
        },
      })
    }

		if(pathname.startsWith('/routes')) {
			const edge = await Deno.readTextFile(`${Deno.cwd()}/home${pathname}`)
			const { handler } = await inject(edge)

			return await handler(request, context)
		}

		const file = await Deno.readTextFile(`${Deno.cwd()}/home${pathname}`)
    console.log(pathname)

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
				'<script type="module" src="/bin/bundle.js"></script>'

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
