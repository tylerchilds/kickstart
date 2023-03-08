import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";
import { lookup } from "https://deno.land/x/media_types/mod.ts";

async function router(request, context) {
	let { pathname } = new URL(request.url);
	console.log(pathname)
	let file
	let statusCode = Status.Success
	try {
		file = await Deno.readTextFile(`../src-ui/dist${pathname}`)
	} catch (e) {
  	pathname = '../src-ui/dist/index.html'
		file = await Deno.readTextFile(pathname)
		statusCode = Status.NotFound
		console.error(pathname + '\n' + e)
	}
	return new Response(file, {
		headers: {
			'content-type': lookup(pathname),
		},
		status: statusCode
	})
}

serve(router);
console.log("Listening on http://localhost:8000");
