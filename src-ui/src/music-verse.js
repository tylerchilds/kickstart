import module from './system/module.js'

const $ = module('music-verse')

const modes = {
	welcome: 'welcome',
	planting: 'planting',
	jamming: 'jamming',
}

const actions = {
	goto: 'goto',
	next: 'next',
	back: 'back'
}

const emptyLauncher = {
	mode: 'welcome',
	nextMode: null,
	backMode: null,
  companionActive: true,
}

export function launcherById(id) {
	return $.learn()[id] || emptyLauncher
}

const paginationActions = [actions.back, actions.next]

$.when('click', '[data-action]', action)
$.when('click', '[data-goto]', goTo)

const actionHandlers = {
	[modes.welcome]: (id) => [
		`
			<button data-id="${id}" data-goto="planting">
				Plant new tree
			</button>
			<button data-id="${id}" data-goto="jamming">
				Jam in forest
			</button>
		`
	],
	[modes.planting]: (id) => [
		`
			<button data-id="${id}" data-goto="jamming">
        Plant Seed
			</button>
		`,
		`
			<button data-id="${id}" data-action="back">
				Go Back
			</button>

		`
	],
	[modes.jamming]: (id) => [
		`
			<button data-id="${id}" data-goto="welcome">
        Restart
			</button>
		`,
	],
	'default': (id) => [
		`
			<button data-id="${id}" data-goto="welcome">
				Restart
			</button>
		`
	],
}

function actionItems(id, mode) {
	const buttons = (actionHandlers[mode] || actionHandlers['default'])(id).join('')
	return `
		<actions>
			${buttons}
		</actions>	
	`
}

$.draw(target => {
	const { id } = target

	const launcher = launcherById(id)

	const renderers = {
		[modes.welcome]: () => `
				<div class="card">
					<h2>Music Trees are the beat of the MusicVerse</h2>
          <p>Find a place to plant a Music Tree</p>
					${actionItems(id, modes.welcome)}
				</div>
			`,
		[modes.planting]: () => `
				<div class="card">
					<h2>Grow a Music Seed into a Music Tree</h2>
          <p>Select a Music Seed to plant</p>
					${actionItems(id, modes.planting)}
				</div>
			`,
		[modes.jamming]: () => `
				<div class="card">
					<h2>Music Trees grow with live performance</h2>
          <p>Jam to perform live with the forest</p>
					${actionItems(id, modes.jamming)}
				</div>
			`,
		[modes.home]: () => `
			<div class="card">
				<h2>Home</h2>
				${actionItems(id, modes.home)}
			</div>
		`,
		'default': () => `
				<div class="card">
					<h2>Error...</h2>
          ${actionItems(id)}
				</div>
			`
	}

	const { mode, nextMode, companionActive } = launcher
	const view = (renderers[mode] || renderers['default'])()
	const fadeOut = nextMode && mode !== nextMode

	const companionClass = companionActive ? `mode-${mode} active` : `mode-${mode}`

	return `
		<button aria-label="Companion" class="switcher" data-id="${id}"></button>
		<companion class="${companionClass}">
			<transition class="${fadeOut ? 'out' : ''}" data-id="${id}">
				${view}
			</transition>
		</companion>
		<music-earth></music-earth>			
		`
})

$.when('click', 'button.switcher', switcher)

function switcher({target}) {
	const { id } = target.dataset
	const { companionActive } = launcherById(id)
  $.teach({ companionActive: !companionActive }, merge(id))
}

function transition({target}) {
	const { id } = target.dataset
	const { mode, nextMode, backMode } = launcherById(id)

	const currentMode = nextMode ? nextMode : mode
	const previousMode = mode !== backMode ? backMode : mode
	$.teach({ mode: currentMode, backMode: previousMode }, merge(id))
	target.scrollTop = '0'
	document.activeElement.blur()
}

$.when('animationend', 'transition', transition)

$.flair(`
		& {
			background: white;
			display: block;
			position: absolute;
			overflow: hidden;
			height: 100%;
			width: 100%;
			inset: 0;
		}

		& .switcher {
			display: block;
			position: fixed;
			height: 1rem;
			padding: 0;
			margin: 0;
			background: orange;
			left: 0;
			right: 0;
			z-index: 10;
			border: 0;
			top: 0;
			width: 100%;
		}

		& actions {
			position: absolute;
			right: 1rem;
			bottom: 1rem;
			transform: translateY(100%);
			border: 1px solid orange;
			border-radius: 2px;
		}

		& companion {
			display: grid;
			place-items: center;
			position: relative;
			top: 1rem;
			min-height: 1rem;
			z-index: 5;
			transition: transform 100ms ease-in-out;
			transform: translateY(-100%);
			border-bottom: 1px solid orange;
		}

		& companion.active {
			transform: translateY(0);
		}

		& companion:not(.active) button {
			animation: &-fade-out ease-in-out 0ms;
			display: none;
		}

		& companion button {
			animation: &-fade-in ease-in-out 1000ms;
			background: white;
			color: blue;
			text-decoration: underline;
			border: none;
			border-bottom: 1px solid cyan;
			width: 100%;
			padding: .5rem;
			text-align: left;
		}

		& companion button:last-child {
			border-bottom: none;	
		}

		& button {
			display: block;
			margin: 0;
		}

		& transition {
			animation: &-fade-in ease-in-out 250ms;
			display: grid;
			height: 100%;
			place-items: center;
			width: 100%;
		}

		& transition.out {
			animation: &-fade-out ease-in-out 100ms;
		}

		& .icons {
			display: grid;
			height: 100%;
			gap: 1rem;
			grid-template-columns: repeat(auto-fill, 4rem);
			grid-template-rows: repeat(auto-fill, 4rem);
			padding: 1rem;
			width: 100%;
		}

		& .icons button {
			margin: 0;
		}

		& .card {
			background: rgba(255,255,255,.85);
			color: rgba(0,0,0,.85);
			width: 100%;
			padding: 1rem;
		}

		& .card h2 {
			color: rgba(0,0,0,.65);
      margin: 0;
		}

		& .card p {
      margin: 0;
    }

		@keyframes &-fade-in {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		@keyframes &-fade-out {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}

		@keyframes &-zoom-in {
			0% {
				transform: scale(.9);
			}
			100% {
				transform: scale(1);
			}
		}

		@keyframes &-zoom-out {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(.9);
			}
		}
	`)
/* controller-like logic */
const welcomePath = [
	modes.welcome,
	modes.planting,
	modes.jamming,
	modes.home,
]

function goTo({ target }) {
  const mode = target.dataset.goto
	return messageStateMachine(target, { action: actions.goto, mode })
}

function action({ target }) {
  const { action } = target.dataset
	return messageStateMachine(target, { action })
}

function messageStateMachine(target, message) {
  const { id } = target.dataset
	const { mode, backMode } = launcherById(id)
	const { action } = message
	function setMode(nextMode) {
		$.teach({ nextMode }, merge(id))
	}

	if(action === actions.goto) {
		setMode(message.mode)
		return
	}

	if(action === actions.back && backMode) {
		setMode(backMode)
		return
	}

	const onTheWelcomePath = welcomePath.includes(mode) && paginationActions.includes(action)

	if(onTheWelcomePath) {
		const order = action === actions.next
			? welcomePath
			: [...welcomePath].reverse()

		const nextIndex = order.indexOf(mode) + 1
		setMode(order[nextIndex])
		return
	}
}

function merge(id) {
	return function middleware(state, payload) {
		return {
			...state,
			[id]: {
				...emptyLauncher,
				...state[id],
				...payload
			}
		}
	}
}

/*
	MusicEarth
	*/

const $earth = module('music-earth', { center: [0,0] })

function initialize(target) {
	const { center } = $earth.learn()
	const container = document.createElement('div')
	container.classList.add('map')
	target.appendChild(container)

	target.map = new maplibregl.Map({
		container,
		style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
		center, // starting position [lng, lat]
		zoom: 2
	})

	target.map.on('load', () => start(target.map))
}

function start(map) {
	window.dispatchEvent(new Event('resize'));
	setInterval(() => jump(), 5000)
}

function jump() {
	const center = [
		getRandomInRange(-90, 90, 3),	
		getRandomInRange(-90, 90, 3),	
	]

	$earth.teach({
		center,
	})
}

function getRandomInRange(from, to, fixed) {
	return (Math.random() * (to - from) + from).toFixed(fixed);
	// .toFixed() returns string, so ' * 1' is a trick to convert to number
}

$earth.draw(function drawPlanet(target) {
	if(!target.map) initialize(target)

	if(!!target.map.getSource) {
		const { center } = $earth.learn()

		target.map.flyTo({
			center,
			speed: .5
		})
	}
})

$earth.flair(`
	& {
		display: block;
	}

	& .map {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
`)

function mod(n, m) {
	return ((n % m) + m) % m;
}
