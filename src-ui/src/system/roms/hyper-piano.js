import module from '../module.js'
import Color from "colorjs.io"
import $guitar from "./guitar.js"

const biomes = [
  'underwater',
  'island',
  'oasis',
  'beach',
  'meadow',
  'forest',
  'mountain',
  'orbit',
  'hyperspace'
]

const constellations = [
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagattarius',
  'capricorn',
  'aquarius',
  'pisces',
  'aries'
]

const elements = [
  'earth',
  'air',
  'water',
  'fire'
]

const theory = [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2]
const unit = 36
const row = theory.reduce((sum, x) => sum+x,0)
const grid = row * unit

function getBiome(index) {
  return biomes[index]
}

function getConstellation(index) {
  return constellations[index]
}

function getElement(midi) {
  const index = mod(midi, elements.length)
  return elements[index]
}

function getFrequency(midi) {
  return 440 * (2 ** ((midi - 69) / 12))
}

function getTheory(midi) {
  const index = mod(midi, theory.length)
  return theory[index]
}

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}
const notes = range(108-24, 24)

const metadata = notes.reduce((meta, midi) => {
  const x = Math.floor(midi / 12) - 1
  const y = mod(midi, 12)
  const subgrid = theory.slice(0, y).reduce((solution, step) => {
    return solution + (step * unit)
  }, 0)
  const coordinate = (subgrid) * 7
  meta[midi] = {
    midi,
    biome: getBiome(x),
    constellation: getConstellation(y),
    element: getElement(midi),
    frequency: getFrequency(midi),
    accidental: (getTheory(midi) % 2 === 1).toString(),
    coordinate
  }

  return meta
}, {})

const context = new AudioContext();

async function loadSample(url) {
  const sample = await fetch(url)
    .then(response => response.arrayBuffer())
    .then(buffer => context.decodeAudioData(buffer));
  return sample
}

function playSample(note, frequency) {
  var oscillator = context.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = parseFloat(frequency); // value in hertz
  oscillator.connect(context.destination);
  oscillator.start()

  setInterval(
    function() {
      oscillator.frequency.value = parseFloat(getFrequency((Math.random() * 127) << 0)); // value in hertz
    }, 20);

  setTimeout(
    function() {
      oscillator.stop();
    }, 200);
}

let synths = []
Promise.all([
  loadSample('/samples/1.mp3'),
  loadSample('/samples/2.mp3'),
  loadSample('/samples/3.mp3'),
  loadSample('/samples/4.mp3'),
  loadSample('/samples/5.mp3'),
  loadSample('/samples/6.mp3'),
  loadSample('/samples/7.mp3'),
  loadSample('/samples/8.mp3'),
]).then(s => synths = s)

const $ = module('hyper-piano', {
  colors: [],
  start: 120,
  length: 360,
  octave: 4,
  reverse: false,
	pitch: 0,
	synth: 0
})

const synaesthesia = Object.keys(metadata).map(midi => metadata[midi])

$.flair(midiToColor(synaesthesia))

function midiToColor(specimens) {
  return specimens.map(metadata => {
    const offset = -106 - metadata.coordinate
    const rules = `
      background-position-x: calc(${offset}px / 7) !important;
    `
    return `& [data-note="${metadata.midi}"]::after {${rules }}`
  }).join('')
}

const strumVelocity = 75
const sustainedDuration = 100
const actionableFPS = 4 

const majorScale = [
  'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'
]

const minorScale = [
  'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#', 'bb', 'f', 'c', 'g', 'd'
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
	const { colors, synth } = $.learn()
  const { note, frequency } = event.target.dataset

  playSample(note, frequency);
  //synths[synth].triggerAttack(`${note}${octave}`, "2n");
	event.target.classList.add('active')
}

function release (event) {
	event.preventDefault()
	event.target.classList.remove('active')
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
let activeRegister = 0

requestAnimationFrame(loop)
function loop(time) {
  const { activeRegisters, activeFrets, activeMotions } = $guitar.learn()
  activeRegisters.map((register, i) => {
    const { up, down } = activeMotions[i]
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

$.draw(() => {
  const wheel = notes.map((note, index) => {
    const {
      frequency,
      element,
      constellation,
      biome,
      accidental
    } = metadata[note]
    const classList = `step element-${element} constellation-${constellation} biome-${biome} accidental-${accidental}`
    return `
      <button
        class="${classList}"
        data-note="${note}"
        data-frequency="${frequency}"
      >
      </button>
    `
  }).join('')

  return `
    ${controls()}
    <div class="window">
      <div class="wheel">
        ${wheel}
      </div>
    </div>
  `
})

function controls() {
	return `
		<div class="controls">
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
    place-content: end;
  }
  & .window {
    width: 100%;
    overflow-x: auto;
  }
  & .wheel {
    display: grid;
    grid-template-columns: repeat(7, 72px 36px 72px 36px 72px 72px 36px 72px 36px 72px 36px 72px);
    grid-template-rows: 216px;
    padding: 0 1rem;
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
    grid-template-rows: 1fr 1fr 1fr;
    clip-path: polygon(20% 0%, 50% 100%, 80% 0%);
    gap: 1px;
  }
  & .step {
    border: none;
    width: 100%;
    height: auto;
    display: grid;
    place-items: start;
    color: black;
		position: relative;
    border-left: 1px solid white;
    border-right: 1px solid white;
    height: 216px;
    max-height: 50vh;
  }

  & .step.accidental-true {
    border-color: black;
  }
  & .step.accidental-true::after {
    transform: rotateZ(180deg);
    filter: brightness(.5);
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
    z-index: 2;
	}

	& .step.active::before {
		animation: &-attack 100ms ease-out forwards;
	}

  & .step::after {
    content: '';
    background: url('/experiences/sss-game/boxart.svg');
		position: absolute;
		inset: 0;
    background-position-y: calc(-3250px / 7);
    background-repeat: no-repeat;
    background-size: calc(5000px / 7);
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
`)

$.when('mousedown', '.step', attack)
$.when('mouseup', '.step', release)

$.when('touchstart', '.step', attack)
$.when('touchend', '.step', release)

function mod(x, n) {
  return ((x % n) + n) % n;
}
function clamp(num, min, max) {
  Math.min(Math.max(num, min), max)
}
