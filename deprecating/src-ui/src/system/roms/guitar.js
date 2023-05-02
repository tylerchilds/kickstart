import module from '../module.js'
import devices from './devices.js'

const initialState = {
  activeFrets: [],
  activeRegisters: [],
  frames: {},
}

const $ = module('guitar-debug', initialState)
const fretMap = ['South', 'East', 'West', 'North', 'LeftTrigger']

const registers = [
  "     ",

  "x    ",
  "x   x",

  " x   ",
  " x  x",

  "  x  ",
  "  x x",

  "   x ",
  "   xx",

  "xx   ",
  "xx  x",

  " xx  ",
  " xx x",
  "x x x",
  "xxxxx"
]

requestAnimationFrame(loop)
function loop(time) {
  const activeFrets = devices.gamepads().map(x => toFrets($, x))
  const activeRegisters = activeFrets.map(x => toRegisters($, x))

  $.teach({
    time,
    activeFrets,
    activeRegisters,
  })

  requestAnimationFrame(loop)
}

$.draw(() => {
  const {
    activeRegisters,
  } = $.learn()

  return activeRegisters.map((x, i) => `
    <div>
      ${x}
    </div>
  `).join('')
})

function toFrets(_$, flags) {
  return fretMap.map(x => {
    const value = flags.buttons[x]
    return value === 1 ? "x" : " "
  }).join('')
}

function toRegisters(_$, frets) {
  return registers.indexOf(frets)
}

$.flair(`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100vw;
    place-items: center;
  }
  & .note {
    font-size: 10vh;
    line-height: 1;
  }

  & .strummed {
    transform: scale(2);
  }
`)

export default $
