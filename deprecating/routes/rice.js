export const handler = (req, res) => {
  return new Response(`
button {
  background: orange;
}
`, {
    headers: {
      'content-type': 'text/css; charset=utf-8'
    }
  })
}
