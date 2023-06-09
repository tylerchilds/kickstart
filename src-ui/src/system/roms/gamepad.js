import module from '../module.js'
import database from '../database.js'
import { originator } from '../../../deps.js'

const $ = module('sos-gamepad')

/*
 * Gamepad API Test
 * Written in 2013 by Ted Mielczarek <ted@mielczarek.org>
 *
 * To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.
 *
 * You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
 * modified by <email@tychi.me> june 2023
 */
var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;


export default function gamepads() {
  const data = $.learn()
  const indexes = Object.keys(controllers) || []
  return indexes
    .filter(index => data[index])
    .map(gameKeyByIndex)
    .map(key => data[key])
}

function gameKeyByIndex(index) {
  // osc or http idgaf
  return `/devices/gamepad-${index}`
}

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

  const key = gameKeyByIndex(gamepad.index)
  const node = database.get(originator).get(key)
  node.on(latest => {
    const state = JSON.parse(latest)
    console.log(state)
    $.teach({
      [state.key]: state
    })
  })
  rAF(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  const key = gameKeyByIndex(gamepad.index)
  const node = database.get(originator).get(key)
  node.off()
  delete controllers[gamepad.index];
}

function updateStatus() {
  scangamepads();
  for (const index in controllers) {
    const key = gameKeyByIndex(index)
    const node = database.get(originator).get(key)
    const controller = controllers[index];
    const buttons = {}
    const axes = {}
    for (let i=0; i<controller.buttons.length; i++) {
      let val = controller.buttons[i];
      if (typeof(val) == "object") {
        val = val.value;
      }
      buttons[i] = val
    }
    for (let i=0; i<controller.axes.length; i++) {
      const val = controller.axes[i].toFixed(4);
      axes[i] = val
    }
    const state = { type: 'gamepad', buttons, axes, key, id: controller.id, index: controller.index }
    node.put(JSON.stringify(state))
  }
  rAF(updateStatus);
}

function scangamepads() {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i] && (gamepads[i].index in controllers)) {
      controllers[gamepads[i].index] = gamepads[i];
    }
  }
}

if (haveEvents) {
  window.addEventListener("gamepadconnected", connecthandler);
  window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
  window.addEventListener("webkitgamepadconnected", connecthandler);
  window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
}
