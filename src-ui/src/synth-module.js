import module from './system/module.js'
import { Color, Tone, Midi } from '../deps.js'
import $guitar from "./guitar.js"

const start = new Date()
let midiOut
const midiIn = new Midi()
const track = midiIn.addTrack()

let gamepads = []
addEventListener("message", (event) => {
  if (event.data.event == 'tick') {
    gamepads = [...event.data.gamepads]
  }
}, false);


addEventListener('keydown', (event) => {
  window.top.postMessage({
    safeEvent: {
      type: event.type,
      key: event.key
    }
  }, '*')
});

const LOW_TONE = 24

const synths = {}

const $ = module('synth-module', {
  colors: [],
  start: 120,
  length: 360,
  octave: 4,
  reverse: false,
	pitch: 0,
	synth: 0,
  activeTones: {}
})

const strumVelocity = 75
const sustainedDuration = 100
const actionableFPS = 4 

const chromaticScale = [
  'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'
]

const lightnessStops = [
  [5, 30],
  [20, 45],
  [35, 60],
  [50, 75],
  [65, 90],
  [80, 105],
  [95, 120]
]

const octaveUp = () => {
	const octave = $.learn().octave + 1
	if(octave > 6) { return }
	$.teach({ octave })
}

const octaveDown = () => {
	const octave = $.learn().octave - 1
	if(octave < 0) { return }
	$.teach({ octave })
}

const pitchUp = () => {
	const pitch = $.learn().pitch + 1
	$.teach({ pitch })
}

const pitchDown =() => {
	const pitch = $.learn().pitch - 1
	$.teach({ pitch })
}

const synthUp = () => {
	const synth = $.learn().synth + 1
	$.teach({ synth })
}

const synthDown =() => {
	const synth = $.learn().synth - 1
	$.teach({ synth })
}
function attack(event) {
	event.preventDefault()
  release(event)
  const { tone } = event.target.dataset
  synths[tone] = {
    destination: new Tone.Synth().toDestination(),
    start: (new Date()),
  }

  $.teach(tone, addActiveTone)
  synths[tone].destination.triggerAttack(tone, "2n");
}

function release (event) {
  const { tone } = event.target.dataset
	event.preventDefault()
  if(synths[tone]) {
    synths[tone].destination.triggerRelease();

    track.addNote({
      midi: tone,
      time: (synths[tone].start - start) / 1000,
      duration: (new Date() - synths[tone].start) / 1000
    })

    delete synths[tone]
    const midiString = JSON.stringify(midiIn.toJSON())
    $.teach({ midiString })
    $.teach(tone, removeActiveTone)
  }
}

const chords = [
  [],

  [0, 4, 1], // c major: c - e - g
  [0, 9, 1], // c minor: c - eb - g

  [1, 5, 2], // g major: g - b - d
  [1, 10, 2], // g minor: g - bb - d

  [2, 6, 3], // d major: d - f# - a
  [2, 11, 3], // d minor: d - f - a

  [4, 8, 5], // e major: e - g# - b
  [4, 2, 5], // e minor: e - g - b

  [3, 9, 4], // a major: a - c# - e
  [3, 0, 4], // a minor: a - c - e

  [11, 3, 0], // f major: f - a - c
  [11, 8, 0], // f minor: f - ab - c
  
  [],// octave picker
  [] // pitch picker
]

let activeSynths = []

requestAnimationFrame(loop)
function loop(time) {
  const { activeRegisters, activeFrets } = $guitar.learn()
  gamepads.map((gamepad, i) => {
    const register = activeRegisters[i]
    const up = gamepad.buttons['DPadUp'] === 1
    const down = gamepad.buttons['DPadDown'] === 1
    if(activeFrets[i] === 'x x x') {
      [[up, octaveUp], [down, octaveDown]].map(([flag, feature]) => {
        flag && throttle({ key: 'octave-shift', time, feature })
      })
    }
    if(activeFrets[i] === 'xxxxx') {
      [[up, pitchUp], [down, pitchDown]].map(([flag, feature]) => {
        flag && throttle({ key: 'pitch-shift', time, feature })
      })
    }
    if(!chords[register]) return

    const feature = () => {
      // if up/down start attack of chords
      if(up || down && register > 0) {
        activeSynths = chords[register]
        activeSynths.map((x, i) => {
          const index = down ? x : activeSynths[activeSynths.length - 1 - i]
          const node = document.querySelector(`[data-index='${index}']`)
          node && queueAttack(node, i)
        })
      }
    }

    feature()
  })

  requestAnimationFrame(loop)
}

function throttle({ key, time, feature }) {
  const { frames = {}} = $.learn()
  const frame = frames[key] || {}

  if((time - 1000 / actionableFPS) > (frame.time || 0)) {
    feature()
    $.teach({ time }, (state, payload) => {
      return {
        ...state,
        frames: {
          ...frames,
          [key]: {
            time: payload.time
          }
        }
      }
    })
  }
}

function queueRelease(node) {
  setTimeout(() => {
    node.dispatchEvent(new Event('touchend'))
  }, sustainedDuration)
}

function queueAttack(node, i) {
  setTimeout(() => {
    node.dispatchEvent(new Event('touchstart'))
    queueRelease(node)
  }, i * strumVelocity)
}

$.ready(() => {
  $.teach({
    colors: recalculate(),
    activeTones: {}
  })
})

$.draw(() => {
  const { colors, activeTones } = $.learn()
  const wheel = chromaticScale.map((label, index) => {
    const steps = colors[mod(index*7, colors.length)].map((x, octave) => {
      const tone = index + LOW_TONE + (octave * 12)
      const active = activeTones[tone]
      const className = active ? `step active` : `step`
      return `
        <button
          class="${className}"
          data-tone="${tone}"
          data-block="${x.block}"
          data-inline="${x.inline}"
          style="background: var(${x.name})">
          ${label}
        </button>
      `
    }).join('')
    return `
      <div class="group" style="transform: rotate(${index * 210}deg)">
        ${steps}
      </div>
    `
  }).join('')

  return `
    <a href="javascript://lol;">Export</a>
    <div class="wheel">
      ${wheel}
			${controls()}
    </div>
  `
})

$.when('click', '[href="javascript://lol;"]', (event) => {
  event.preventDefault()
  const { midiString } = $.learn()
  const data = JSON.parse(midiString)
  midiOut = new Midi()
  midiOut.fromJSON(data)

  const blob = new Blob([
	  midiOut.toArray()	
  ], {type: 'audio/midi'} )

	const exportUrl = URL.createObjectURL(blob)
  const href = document.createElement('a');

  href.href = exportUrl
  href.download = `${new Date().toISOString()}.mid`
  href.target = '_blank'
  href.click()

  URL.revokeObjectURL(exportUrl)

})

function controls() {
	return `
		<div class="controls" style="display: none;">
			<button class="octave-up"></button>
			<button class="pitch-up"></button>
			<button class="pitch-down"></button>
			<button class="octave-down"></button>
		</div>
	`
}

$.when('click', '.octave-up', octaveUp)
$.when('click', '.octave-down', octaveDown)
$.when('click', '.pitch-up', pitchUp)
$.when('click', '.pitch-down', pitchDown)

$.flair(`
  & {
    height: 100%;
    display: grid;
    place-content: center;
  }
  & .wheel {
    display: grid;
    grid-template-areas: "slot";
    grid-template-rows: 45vmin;
    grid-template-columns: 40vmin;
    place-content: start center;
    padding: 0 1rem;
    height: 90vmin;
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
    touch-action: manipulation;
  }
  & .group {
    grid-area: slot;
    transform-origin: bottom;
    display: grid;
    grid-template-columns: 1fr;
    clip-path: polygon(20% 0%, 50% 100%, 80% 0%);
    gap: 1px;
  }
  & .step {
    border: none;
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    color: black;
		position: relative;
    text-align: center;
  }

  & .step.half {
    color: white;
  }

	& .step::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			rgba(0, 0, 0, .25),
			transparent,
			rgba(255, 255, 255, .75),
			transparent,
			transparent,
			transparent
		);
		background-size: 300% 300%;
		background-position-y: 100%;
		animation: &-decay 100ms ease-out forwards;
	}

	& .step.active::before {
		animation: &-attack 100ms ease-out forwards;
	}

	@keyframes &-attack {
		0% {
			background-position-y: 50%;
		}
		100% {
			background-position-y: 0%;
		}
	}

	@keyframes &-decay {
		0% {
			background-position-y: 50%;
		}
		100% {
			background-position-y: 100%;
		}
	}

  ${invertedLabels()}
`)

function invertedLabels() {
  const rulesets = []
  for(let i = 1; i < 360; i++) {
    rulesets.push(`
      & [style*="rotate(${i}deg)"] label {
        transform: rotate(${-1 * i}deg);
      }
    `)
  }
  return rulesets.join('')
}

function gradient(scale, stops) {
	return `
    background: linear-gradient(${stops.map(x => scale[x]).join(', ')})
  `
}

function recalculate() {
  const { start, length, reverse } = $.learn()

  const colors = [...Array(12)].map((_, hueIndex) => {
    const step = ((length / 12) * hueIndex)
    const hue = reverse
      ? start - step
      : start + step

    return lightnessStops.map(([l, c], i) => {
      const name = `--wheel-${hueIndex}-${i}`
      const value = new Color('lch', [l, c, hue])
        .display()
        .toString({format: 'hex'})

      return {
        name,
        value,
        block: hueIndex,
        inline: i
      }
    })
  })
/*
  upload(colors)
*/
  return colors
}

$.when('mousedown', '.step', attack)
$.when('mouseup', '.step', release)

$.when('touchstart', '.step', attack)
$.when('touchend', '.step', release)

function mod(x, n) {
  return ((x % n) + n) % n;
}

function addActiveTone(state, payload) {
  const newState = {...state}
  newState.activeTones[payload] = true
  return newState
}

function removeActiveTone(state, payload) {
  const newState = {...state}
  if(newState.activeTones[payload]) delete newState.activeTones[payload]
  return newState
}
