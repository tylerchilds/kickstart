import tag from 'https://thelanding.page/tag/tag.bundle.js'
const controllers = {};

const initialState = {}

const $ = tag('data-gamepads', initialState)

$.render((target) => renderGamepads(target, $))

function connecthandler(e) {
  const { index } = e.gamepad
  controllers[index] = e.gamepad;
  requestAnimationFrame(gamepadLoop);
}

function disconnecthandler(e) {
  const { index } = e.gamepad
  delete controllers[index];
}

function renderGamepads(_target, $) {
  const ids = Object.keys(controllers) || []

  return ids
    .map(x => controllers[x])
    .map((gamepad) => `
      <div id="${gamepad.id}">
        <h1>gamepad: ${gamepad.id}</h1>
        <div class="buttons">
          ${renderButtons($, gamepad)}
        </div>
        <div class="axes">
          ${renderAxes($, gamepad)}
        </div>
      </div>
    `).join('')
}

function renderButtons(_$, gamepad) {
  const buttons = [...gamepad.buttons].map((button, i) => {
    let val = button
    let pressed = val == 1.0;

    if (typeof(val) == "object") {
      pressed = val.pressed;
      val = val.value;
    }

    const pct = Math.round(val * 100) + "%";

    return `
      <button
        id="pad:${gamepad.index};button:${i}"
        class="button ${ pressed ? 'pressed' : ''}"
        style="background-size: ${pct} ${pct}"
       >
        ${i}
      </button>
     `
  })
 
  return buttons.join('')
}

function renderAxes(_$, gamepad) {
  const axes = [...gamepad.axes].map((axis, i) => {
    const val = axis + 1

    return `
      <progress
        class="axis"
        id="pad:${gamepad.index};axis:${i}"
        max="2"
        value="${val}"
      >
        ${i}: ${val.toFixed(4)}
      </progress>
     `
  })

  return axes.join('')
}

function gamepadLoop(tick) {
  $.write({ tick })

  requestAnimationFrame(gamepadLoop);
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

document.body.insertAdjacentHTML("beforeend", `
  <data-gamepads></data-gamepads>
`)

export default $
