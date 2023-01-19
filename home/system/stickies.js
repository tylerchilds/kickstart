import module from '../system/module.js'
import '../system/devices.js'

const $ = module('stickies', {
  memory: firstMemories(),
  active: 'http://localhost:8000/routes/press-start-and-win.js'
})

$.draw((target) => {
  const { memory, active } = $.learn()
  const memories = Object
    .keys(memory)
    .map(key => memory[key])
    .filter(thinking)

  const stickies = memories
    .map(about => `
      <button data-key="${about.key}">
        ${about.title}
      </button>
    `)
    .join('')

  return `
    ${stickies}
    <iframe src="${active}" title="Active Window"></iframe>
  `
})

function thinking(about) {
  return about ? true : false
}

function firstMemories() {
  return {
    '0': {
      key: '0',
      title: 'Authentication',
      embed: `
        <authentication></authentication>
        <script type="module" src="/scripts/authentication.js"></script>
      `,
    },
    '1': {
      key: '1',
      title: 'Devices',
      embed: `
        <debug-devices></debug-devices>
        <script type="module" src="/system/devices.js"></script>
      `,
    },
    '2': {
      key: '2',
      title: 'Synthia',
      embed: `
        <synth-module></synth-module>
        <script type="module" src="/scripts/synth-module.js"></script>
      `,
    }
  }
}

$.when('click', 'button[data-key]', (event) => {
  const { key } = event.target.dataset
  const memory = $.learn().memory[key]
  console.log(memory.embed)
  const blob = new Blob([memory.embed], { type: 'text/html' })
  const active = URL.createObjectURL(blob)
  /*$.teach({ active })*/
})
