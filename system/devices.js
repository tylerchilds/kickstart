import module from '/system/module.js'

const initialState = { gamepads: [] }
const $ = module('debug-devices', initialState)


// access the pre-bundled global API functions
const { invoke } = window.__TAURI__.tauri
const { listen } = window.__TAURI__.event

const defaultGamepad = { axes: {}, buttons: {} }
const EVENTS = {
  'AxisChanged': onAxisChange,
  'ButtonChanged': onButtonChange,
}

function send(payload) {
  console.log("js: js2rs: " + payload)
  invoke('js2rs', { message: payload })
}

await listen('rs2js', function receive(event) {
  console.log("js: rs2js: " + event.payload)
	const payload = JSON.parse(event.payload) || {}

  if(EVENTS[payload.event]) {
    console.log(payload)
    EVENTS[payload.event](payload)
  }
})

function onAxisChange({ id, key, value }) {
  $.teach({ key, value }, mergeAxisChange(id))
}

function onButtonChange({ id, key, value }) {
  $.teach({ key, value }, mergeButtonChange(id))
}

function mergeAxisChange(id) {
  return (state, payload) => {
    const gamepad = state.gamepads[id] || defaultGamepad

    return {
      ...state,
      gamepads: {
        ...state.gamepads,
        [id]: {
          ...gamepad,
          axes: {
            ...gamepad.axes,
            [payload.key]: payload.value
          }
        }
      }
    }
  }
}

function mergeButtonChange(id) {
  return (state, payload) => {
    const gamepad = state.gamepads[id] || defaultGamepad

    return {
      ...state,
      gamepads: {
        ...state.gamepads,
        [id]: {
          ...gamepad,
          buttons: {
            ...gamepad.buttons,
            [payload.key]: payload.value
          }
        }
      }
    }
  }
}

$.draw((target) => renderGamepads(target, $))

$.flair(`
  & .gamepads {
    list-style-type: none;
  }
  & .gamepad {
  }
  & .buttons,
  & .axes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    list-style-type: none;
    padding: .5rem 0 0;
  }
  & .input {
    background: linear-gradient(lime 0%, orange 50%, rebeccapurple 100%);
    background-size: 1px 6rem;
    background-repeat: repeat-x;
    background-position-y: var(--value);
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
  }
`)

function renderGamepads(_target, $) {
  const { gamepads } = $.learn()
  const list = Object.keys(gamepads)
    .map(key => gamepads[key])
    .map((gamepad, index) => `
      <div class="gamepad" id="${gamepad.id}">
        Buttons: ${Object.keys(gamepad.buttons).map(key => key +': '+gamepad.buttons[key])}
        <br/>
        Axes: ${Object.keys(gamepad.axes).map(key => key +': '+gamepad.axes[key])}
      </div>
    `).join('')
  return `<div class="gamepads">${list}</div>`
}
