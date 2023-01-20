import module from '../system/module.js'
import '../system/devices.js'

const $ = module('stickies', {
  memory: firstMemories(),
  activeEmbed: `
    <iframe src="http://localhost:8000/routes/press-start-and-win.js"></iframe>
  `,
})

$.draw((target) => {
  const { memory, activeEmbed } = $.learn()
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
    <div class="embed">
      ${activeEmbed}
    </div>
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
        <iframe src="http://localhost:8000/routes/authentication.js"></iframe>
      `,
    },
    '1': {
      key: '1',
      title: 'Devices',
      embed: `
        <iframe src="http://localhost:8000/routes/devices.js"></iframe>
      `,
    },
    '2': {
      key: '2',
      title: 'Synthia',
      embed: `
        <iframe src="http://localhost:8000/routes/synthia.js"></iframe>
      `,
    }
  }
}

$.when('click', 'button[data-key]', (event) => {
  const { key } = event.target.dataset
  const { embed } = $.learn().memory[key]
  $.teach({
    activeEmbed: embed
  })
})
