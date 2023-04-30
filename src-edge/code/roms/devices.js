import module from '../module.js'
import safeTauri from '../safe-tauri.js'
import { randomString } from '../../deps.js'

const originator = randomString()

const initialState = {
  gamepads: {},
  midiDevices: {}
}
const $ = module('debug-devices', initialState)

export default {
  gamepads,
  midiDevices
}

export function gamepads() {
  const { gamepads } = $.learn()
  return [...Object.keys(gamepads)
    .map(id => ({
      id,
      ...gamepads[id]
    }))]
}

export function midiDevices() {
  const { midiDevices } = $.learn()
  return [...Object.keys(midiDevices)
    .map(id => ({
      id,
      ...midiDevices[id]
    }))]
}

// access the pre-bundled global API functions
const { invoke } = safeTauri.tauri
const { listen } = safeTauri.event

const defaultGamepad = { axes: {}, buttons: {} }
const defaultMidiDevice = { keys: {} }
const EVENTS = {
  'AxisChanged': onAxisChange,
  'ButtonChanged': onButtonChange,
  'MidiMessage': onMidiMessage,
  'KeyboardInput': onKeyboardInput,
}

// client
const socketProtocol = self.location.protocol === 'https:' ? 'wss:' : 'ws:'
const socket = new WebSocket(socketProtocol+"//"+self.location.host + self.location.pathname)
listen('rs2js', receive)
self.onmessage = (event) => receive(event.data)
socket.onmessage = event => {
  const { payload, originator } = JSON.parse(event.data)
  console.log(payload, originator)
  receive({ payload, originator })
}

window.onbeforeunload = function() {
	socket.onclose = function () {}; // disable onclose handler first
	socket.close();
};

function receive(event) {
  if(event.payload) {
    const payload = JSON.parse(event.payload) || {}

    if(EVENTS[payload.event]) {
      EVENTS[payload.event](payload)
    }

    if(event.stopPropogation) return
    forward(event)
  } else { console.log(event) }
}

function forward(event) {
  if(originator === event.originator) {
    return
  }
  const children = [...document.querySelectorAll('iframe')]
  children.map(iframe => {
    iframe.contentWindow.postMessage(event, '*')
  })
  const data = JSON.stringify({ payload: event.payload, originator })
  socket.send(data)
}

function onAxisChange({ id, key, value }) {
  $.teach({ key, value }, mergeAxisChange(id))
}

function onButtonChange({ id, key, value }) {
  $.teach({ key, value }, mergeButtonChange(id))
}

function onMidiMessage({ command, note, velocity }) {
  if (command === 144) {
    onMidiChange({
      id: '1',
      key: note,
      velocity,
      on: true
    })
  }

  // some midi keyboards don't send the off signal,
  // they just set the velocity to 0
  if (command === 128 || velocity === 0) {
    onMidiChange({
      id: '1',
      key: note,
      velocity,
      on: false
    })
  }
}
function onKeyboardInput({ type, key }) {
  self.top.dispatchEvent(new KeyboardEvent(type, { key }));
}

function onMidiChange({ id, key, on, velocity }) {
  $.teach({ key, value: { on, velocity, key }}, mergeKeyChange(id))
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

function mergeKeyChange(id) {
  return (state, payload) => {
    const midiDevice = state.midiDevices[id] || defaultMidiDevice

    return {
      ...state,
      midiDevices: {
        ...state.midiDevices,
        [id]: {
          ...midiDevice,
          keys: {
            ...midiDevice.keys,
            [payload.key]: payload.value
          }
        }
      }
    }
  }
}


$.draw((target) => renderDevices(target, $))

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

function renderDevices(_target, $) {
  const gamepadList = gamepads()
    .map((gamepad, index) => `
      <div class="gamepad" id="${gamepad.id}">
        Buttons: ${Object.keys(gamepad.buttons).map(key => key +': '+gamepad.buttons[key])}
        <br/>
        Axes: ${Object.keys(gamepad.axes).map(key => key +': '+gamepad.axes[key])}
      </div>
    `).join('')
  const midiList = midiDevices()
    .map((midi, index) => `
      <div class="midi" id="${midi.id}">
        Keys: ${Object.keys(midi.keys).map(key => midi.keys[key]).filter(({ on }) => on).map(({ key, velocity }) => key +': '+velocity)}
      </div>
    `).join('')

  return `
    <div class="gamepads">${gamepadList}</div>
    <div class="midi">${midiList}</div>
  `
}

invoke('list_midi_connections').then(() => {
    invoke('open_midi_connection', { inputIdx: 1 })
})

function handleMidiMessage(event) {
  const [command, note, velocity] = event.payload.message

  if(command === 248) return
  const payload = { event: 'MidiMessage', command, note, velocity }

  forward({ payload: JSON.stringify(payload) })
}

listen('midi_message', handleMidiMessage)
  .then((unlistener) => console.log(unlistener))
  .catch(console.error)
