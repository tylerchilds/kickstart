export const handler = (req, res) => {
  return new Response(`
html {
  background: url('/sprites/background.png');
}
body {
  background:
    url('/sprites/background-tl.png') top left no-repeat,
    url('/sprites/background-tr.png') top right no-repeat,
    url('/sprites/background-bl.png') bottom left no-repeat,
    url('/sprites/background-br.png') bottom right no-repeat,
    url('/sprites/background-t.png') top repeat-x,
    url('/sprites/background-b.png') bottom repeat-x,
    url('/sprites/background-l.png') left repeat-y,
    url('/sprites/background-r.png') right repeat-y
  ;
  padding: 24px;
}
  `, {
    headers: {
      'content-type': 'text/css; charset=utf-8'
    }
  })
}
