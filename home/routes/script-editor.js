export const handler = (_request, _context) => {
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
        <scripttype-editor></scripttype-editor>

        <script type="module" src="/bin/bundle.js"></script>
        <script>
        window.addEventListener('keydown', (event) => {
          window.top.postMessage({
            safeEvent: {
              type: event.type,
              key: event.key
            }
          }, '*')
        });
        </script>
      </body>
    </html>
  `, {
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  })
}
