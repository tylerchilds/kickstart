import module from '/system/module.js'

export default function devices() {
  const ids = Object.keys(controllers) || []

	return ids
    .map(x => controllers[x])
    .map(gatherInputs)
}

const controllers = {};

const initialState = { gamepads: [] }

const $ = module('debug-devices', initialState)

$.draw((target) => renderGamepads(target, $))

function connecthandler(e) {
  const { index } = e.gamepad
  controllers[index] = e.gamepad;
  requestAnimationFrame(gamepadLoop);
}

function disconnecthandler(e) {
  const { index } = e.gamepad
  delete controllers[index];
}

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

function renderValue(value, index) {
  const offset = parseFloat(value) - 2 + 'rem'
  return `
    <div
      class="input"
      style="--value: ${offset};"
    >${index}</div>
  `
}

function renderInputs($, flags) {
  const { gamepad } = flags

	const buttons = flags.buttonMapping
		? flags.buttonMapping.map(x => gamepad.buttons[x])
		: gamepad.buttons

	const axes = flags.axesMapping
		? flags.axesMapping.map(x => gamepad.axes[x])
		: gamepad.axes

  return `
    <div class="buttons">
      ${buttons.map(renderValue).join('')}
      ${axes.map(renderValue).join('')}
    </div>
  `
}

function renderGamepads(_target, $) {
  const { gamepads } = $.learn()
	const buttonMapping = [0, 1, 3, 2, 4]
	const axesMapping = [7]
  const list = gamepads
    .map((gamepad, index) => `
      <div class="gamepad" id="${gamepad.id}">
        ${renderInputs($, { gamepad, buttonMapping, axesMapping })}
      </div>
    `).join('')

  return `<div class="gamepads">${list}</div>`
}

function gamepadLoop(tick) {
  const ids = Object.keys(controllers) || []
  const gamepads = ids
    .map(x => controllers[x])
    .map(gatherInputs)

  $.teach({ tick, gamepads })

  requestAnimationFrame(gamepadLoop);
}

function gatherInputs(gamepad, index) {
  const buttons = [...gamepad.buttons].map((button, i) => {
    let value = button

    if (typeof(value) == "object") {
      value = value.value;
    }

    return value
  })

  const axes = [...gamepad.axes].map((axis, i) => {
    const value = axis

    return value
  })

  return { buttons, axes, id: gamepad.id, index: gamepad.index }
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);
