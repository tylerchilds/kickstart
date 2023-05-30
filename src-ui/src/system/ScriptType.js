const bus = {
  state: {}
}

const BIOS_MODE = Symbol('bios')
const NORMAL_MODE = Symbol('normal')
const KEY_VALUE_MODE = Symbol('key-value')
const DYNAMIC_MODE = Symbol('dynamic')

export const compile = (script) => {
  const ScriptType = {
    '#': append.bind({}, 'address'),
    '@': append.bind({}, 'character'),
    '"': append.bind({}, 'quote'),
    '(': append.bind({}, 'parenthetical'),
    '!': append.bind({}, 'information'),
    '^': append.bind({}, 'effect'),
    '<': plugin,
    '{': scope,
  }

  function scope(type) {
    setScope(type)
    resetAttributes(type)
    setMode(KEY_VALUE_MODE)
  }

  function plugin(x) {
    setPlugin(x)
    resetAttributes(x)
    setMode(DYNAMIC_MODE)
  }

  const symbols = Object.keys(ScriptType)

  const modes = {
    [BIOS_MODE]: biosMode,
    [NORMAL_MODE]: normalMode,
    [KEY_VALUE_MODE]: kvMode,
    [DYNAMIC_MODE]: dynamicMode,
  }

  const isolate = {
    scope: 'global',
    plugin: '',
    mode: BIOS_MODE,
    result: ``
  }

  const lines = script.split('\n')

  for (const line of lines) {
    (modes[isolate.mode] || noop)(line)
  }

  return isolate.result

  function biosMode(line) {
    console.log('todo: implement')
    console.log(line)
    return setMode(NORMAL_MODE)
  }

  function normalMode(line) {
    if(!line) return blank()

    const symbol = line[0]

    if(symbols.includes(symbol)) {
      const [_, text] = line.split(symbol)
      return ScriptType[symbol](text.trim())
    }

    return freetext(line)
  }

  function kvMode(line) {
    const [key, value] = line.split(':')

    if(!value) {
      headers()
      title()
      return setMode(NORMAL_MODE)
    }

    bus.state[isolate.scope][key.trim()] = value.trim()
  }

  function dynamicMode(line) {
    const [key, value] = line.split(':')

    if(!value) {
      embed()
      return setMode(NORMAL_MODE)
    }

    bus.state[isolate.plugin][key.trim()] = value.trim()
  }

  function setMode(m) {
    isolate.mode = m
  }

  function setScope(s) {
    isolate.scope = s
  }

  function setPlugin(d) {
    isolate.plugin = d
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

typewriter-title {
  display: block;
  height: 100%;
  width: 100%;
}

title-cover {
  display: grid;
  grid-template-areas:
    "main main"
    "contact agent";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
}

title-main {
  place-self: center;
  grid-area: main;
  text-align: center;
}

title-title {
  margin-bottom: 1rem;
}

title-title,
title-author {
  display: block;
}

title-contact {
  grid-area: contact;
}

title-agent {
  grid-area: agent;
}

typewriter-address,
typewriter-character,
typewriter-quote,
typewriter-parenthetical,
typewriter-information,
typewriter-effect,
typewriter-freetext,
typewriter-blank {
  display: block;
}

typewriter-address,
typewriter-information {
  text-transform: uppercase;
  margin: 1rem 0;
}

typewriter-character,
typewriter-parenthetical {
  text-align: center;
}

typewriter-character {
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0 0;
}

typewriter-effect {
  margin: 1rem 0;
  text-align: right;
}

typewriter-quote {
  margin: 0 1in;
}

typewriter-quote:first-child::before {
  content: "(CONT'D)" !important;
  display: block;
  text-align: center;
}

typewriter-parenthetical::before {
  content: '(';
}

typewriter-parenthetical::after {
  content: ')';
}

typewriter-freetext {
  margin: 1rem 0;
}
      </style>
			<!--
      <script src="/vendor/paged.polyfill.js" defer></script>
			-->
    </head>
    <body>
    `

    isolate.result += html
  }

  function title() {
    const {
      title,
      author,
      contact,
      agent
    } = bus.state[isolate.scope]

    append('title', `
      <title-cover>
        <title-main>
          <title-title>
            ${title}
          </title-title>
          by
          <title-author>
            ${author}
          </title-author>
        </title-main>
        <title-contact>
          ${markup(contact) || '' }
        </title-contact>
        <title-agent>
          ${markup(agent) || '' }
        </title-agent>
      </title-cover>
    `)
  }
  function embed() {
    const properties = bus.state[isolate.plugin]

    const attributes = Object.keys(properties)
      .map(x => `${x}="${properties[x]}"`).join('')

    isolate.result += `<${isolate.plugin} ${attributes}></${isolate.plugin}>`
  }

  function markup(string) {
    return string && string.replaceAll('\\', '<br>')
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
