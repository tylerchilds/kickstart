export const compile = (script) => {
  const bus = {
    state: {}
  }

  const ScriptType = {
    '{': metaCode,
    '#': place,
    '@': actor,
    '-': message,
    '(': subtext,
    '!': context,
    '^': composition,
    '<': dynamicCode,
  }

  const symbols = Object.keys(ScriptType)

  const NORMAL_MODE = 'normal'
  const META_MODE = 'meta'
  const DYNAMIC_MODE = 'dynamic'

  const modes = {
    [NORMAL_MODE]: normalMode,
    [META_MODE]: metaMode,
    [DYNAMIC_MODE]: dynamicMode,
  }

  const isolate = {
    scope: 'global',
    dynamic: '',
    mode: NORMAL_MODE,
    result: ``
  }

  const lines = script.split('\n')

  console.log(lines)

  for (const line of lines) {
    (modes[isolate.mode] || noop)(line)
  }

  return isolate.result

  function normalMode(line) {
    if(!line) return blank()

    const symbol = line[0]

    if(symbols.includes(symbol)) {
      const [_, text] = line.split(symbol)
      return ScriptType[symbol](text.trim())
    }

    return freetext(line)
  }

  function metaMode(line) {
    const [key, value] = line.split(':')

    if(!value) {
      headers()
      metapage()
      return setMode(NORMAL_MODE)
    }

    bus.state[isolate.scope][key.trim()] = value.trim()
  }

  function dynamicMode(line) {
    const [key, value] = line.split(':')

    if(!value) {
      module()
      return setMode(NORMAL_MODE)
    }

    bus.state[isolate.dynamic][key.trim()] = value.trim()
  }


  function setMode(m) {
    isolate.mode = m
  }

  function setScope(s) {
    isolate.scope = s
  }

  function setDynamic(d) {
    isolate.dynamic = d
  }

  function metaCode(scope) {
    setScope(scope)
    resetAttributes(scope)
    setMode(META_MODE)
  }

  function dynamicCode(x) {
    setDynamic(x)
    resetAttributes(x)
    setMode(DYNAMIC_MODE)
  }

  function resetAttributes(x) {
    bus.state[x] = {}
  }

  function headers() {
    const {
      title,
      author,
    } = bus.state[isolate.scope]


    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>${title} by ${author}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">

      <style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@media print {
  html, body {
    height: 100%;
  }
}

body {
  font-size: 12pt;
  font-family: courier;
  margin: 0 auto;
  max-width: 6in;
}

@page {
  size: 8.5in 11in;
  margin: 1in 1in 1in 1.5in;
}

@page {
  @top-right {
    content: counter(page) '.';
  }
}

@page:first {
  @top-right {
    content: '';
  }
}

screenplay-metapage {
  display: block;
  height: 100%;
  width: 100%;
}

metapage-cover {
  display: grid;
  grid-template-areas:
    "main main"
    "contact agent";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
}

metapage-main {
  place-self: center;
  grid-area: main;
  text-align: center;
}

metapage-title {
  margin-bottom: 1rem;
}

metapage-title,
metapage-author {
  display: block;
}

metapage-contact {
  grid-area: contact;
}

metapage-agent {
  grid-area: agent;
}

screenplay-place,
screenplay-actor,
screenplay-message,
screenplay-subtext,
screenplay-context,
screenplay-composition,
screenplay-freetext,
screenplay-blank {
  display: block;
}

screenplay-place,
screenplay-context {
  text-transform: uppercase;
  margin: 1rem 0;
}

screenplay-actor,
screenplay-subtext {
  text-align: center;
}

screenplay-actor {
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0 0;
}

screenplay-composition {
  margin: 1rem 0;
  text-align: right;
}

screenplay-message {
  margin: 0 1in;
}

screenplay-message:first-child::before {
  content: "(CONT'D)" !important;
  display: block;
  text-align: center;
}

screenplay-subtext::before {
  content: '(';
}

screenplay-subtext::after {
  content: ')';
}

screenplay-freetext {
  margin: 1rem 0;
}
      </style>
      <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js" defer></script>
    </head>
    <body>
    `

    isolate.result += html
  }

  function metapage() {
    const {
      title,
      author,
      contact,
      agent
    } = bus.state[isolate.scope]

    append('metapage', `
      <metapage-cover>
        <metapage-main>
          <metapage-title>
            ${title}
          </metapage-title>
          by
          <metapage-author>
            ${author}
          </metapage-author>
        </metapage-main>
        <metapage-contact>
          ${markup(contact) || '' }
        </metapage-contact>
        <metapage-agent>
          ${markup(agent) || '' }
        </metapage-agent>
      </metapage-cover>
    `)
  }
  function module() {
    const properties = bus.state[isolate.dynamic]

    const attributes = Object.keys(properties)
      .map(x => `${x}="${properties[x]}"`).join('')

    isolate.result += `<${isolate.dynamic} ${attributes}></${isolate.dynamic}>`
  }

  function markup(string) {
    return string && string.replaceAll('\\', '<br>')
  }

  function place(line) {
    append('place', line)
  }
  function actor(line) {
    append('actor', line)
  }
  function message(line) {
    append('message', line)
  }
  function subtext(line) {
    append('subtext', line)
  }
  function context(line) {
    append('context', line)
  }
  function composition(line) {
    append('composition', line)
  }
  function freetext(line) {
    append('freetext', line)
  }

  function blank() {
    append("blankline", "")
  }

  function append(tag, content) {
    const html = `
      <${isolate.scope}-${tag}>
        ${content}
      </${isolate.scope}-${tag}>
    `
    isolate.result += html
  }

  function noop() {}
}
