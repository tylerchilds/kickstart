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
      </head>
      <body>
        Press Start and Win
        <synth-module></synth-module>
        <script type="module" src="/scripts/synth-module.js"></script>

        <script>
          window.onmessage = function(e) {

            if (e.data.event == 'tick') {
              const startPressed = e.data.gamepads
                .map(x => x.buttons)
                  .map(x => x['Start'])
                    .some(x => x === 1)

              if(startPressed) {
                alert('You win!')
              }
            }
            if (e.data == 'hello') {
              alert('It works!');
              window.top.postMessage({
									"id": 'id',
									"key": 'LeftStickX',
									"event": "AxisChanged",
									"value": 0.0
	
              }, '*')
            }
          };
        </script>
      </body>
    </html>
  `, {
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  })
}
