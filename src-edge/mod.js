import { lookup } from "https://deno.land/x/media_types/mod.ts";

// Start listening on port 8080 of localhost.
const server = Deno.listen({ port: 8080 });
console.log("File server running on http://localhost:8080/");

for await (const conn of server) {
  handleHttp(conn).catch(console.error);
}

async function handleHttp(conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // Use the request pathname as filepath
    const url = new URL(requestEvent.request.url);
    const filepath = decodeURIComponent(url.pathname);

    // Try opening the file
    let file;
    try {
			console.log('the fuck')
      file = await Deno.open("." + filepath, { read: true });
    } catch (e) {

			const res = await sillyz()
			console.log(res)
      await requestEvent.respondWith(res);
    }
    const readableStream = file.readable;

    // Build and send the response
    const response = new Response(readableStream, {
			headers: {
				'content-type': lookup(filepath),
			},
			status: 200
		});
    await requestEvent.respondWith(response);
  }
}

async function sillyz() {
	const importMap = await Deno.readTextFile(Deno.cwd() + '/vendor/import_map.json')

	const MissingNO = `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/artifacts/favicon.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Sillyz.Computer</title>
				<link href="/artifacts/styles/system.css" rel="stylesheet">
			 </head>
			<body>
			 <script type="importmap"">
				${importMap}
			 </script>
			 <script type="text/javascript">
					(function preferences() {
						if(window.top === self.self) {
							document.body.style = 'background: orange';
						}
					})();

					var now = HTMLScriptElement.supports && HTMLScriptElement.supports('importmap');

					now ? future() : past();

					function future() {
						var script = document.createElement('script');
						script.type = "module";
						script.src = "/main.js";
						document.body.appendChild(script);
					}

					function past() {
						var script = document.createElement('script');
						script.type = "text/javascript";
						// todo, build the past using the -> 2015 -> 1998 bundler
						script.src = "/generated/main.bundle.js";
						document.body.appendChild(script);
					}
				</script>
			</body>
		</html>
	`

	return new Response(MissingNO, {
		headers: {
			'content-type': 'text/html; charset=utf-8'
		},
		status: 404
	})
}
