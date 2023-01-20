import module from '../system/module.js'
import '../system/devices.js'

const $ = module('stickies', {
  memory: firstMemories(),
  activeEmbed: `
    <iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
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
        <iframe src="/stickies/authentication.html"></iframe>
      `,
    },
    '1': {
      key: '1',
      title: 'Devices',
      embed: `
        <iframe src="/stickies/devices.html"></iframe>
      `,
    },
    '2': {
      key: '2',
      title: 'Synthia',
      embed: `
        <iframe src="/stickies/synthia.html"></iframe>
      `,
    },
    '3': {
      key: '3',
      title: 'Slides',
      embed: `
        <iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
      `,
    },
  }
}

$.when('click', 'button[data-key]', (event) => {
  const { key } = event.target.dataset
  const { embed } = $.learn().memory[key]
  $.teach({
    activeEmbed: embed
  })
})

$.flair(`
  .embed {
    position: fixed;
    inset: 0;
  }

  .embed iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
`)
