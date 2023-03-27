import module from './system/module.js'

const $ = module('music-verse')

const modes = {
	welcome: 'welcome',
	alias: 'alias',
	context: 'context',
	store: 'store',
	download: 'download',
	settings: 'settings',
	home: 'home'
}

const actions = {
	goto: 'goto',
	next: 'next',
	back: 'back'
}

const emptyLauncher = {
	applications: [],
	mode: 'welcome',
	nextMode: null,
	backMode: null
}

export function launcherById(id) {
	return $.learn()[id] || emptyLauncher
}

const strictModes = [modes.welcome, modes.alias, modes.home]
const paginationActions = [actions.back, actions.next]

$.when('click', '.next', action(actions.next))
$.when('click', '.back', action(actions.back))

$.when('click', '.welcome', goTo(modes.welcome))
$.when('click', '.home', goTo(modes.home))
$.when('click', '.store', goTo(modes.store))
$.when('click', '.download', goTo(modes.download))
$.when('click', '.settings', goTo(modes.settings))

const actionHandlers = {
	[modes.welcome]: (id) => [
		`
			<button data-id="${id}" class="next">
				Continue
			</button>
		`
	],
	[modes.alias]: (id) => [
		`
			<button data-id="${id}" class="next">
					Continue
			</button>
		`,
		`
			<button data-id="${id}" class="back">
				Go Back
			</button>

		`
	],
	[modes.context]: (id) => [
		`
			<button data-id="${id}" class="next">
					Continue
			</button>
		`,
		`
			<button data-id="${id}" class="back">
				Go Back
			</button>
		`
	],
	[modes.home]: (id) => [
		`
			<button data-id="${id}" class="back">
				Go Back
			</button>
			<button data-id="${id}" class="welcome">
				Restart
			</button>
		`
	],
	'default': (id) => [
		`
			<button data-id="${id}" class="home">
				Home
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
					<h2>Welcome</h2>
					${actionItems(id, modes.welcome)}
				</div>
			`,
		[modes.alias]: () => `
				<div class="card">
					<h2>Alias</h2>
					${actionItems(id, modes.alias)}
				</div>
			`,
		[modes.context]: () => `
				<div class="card">
					<h2>Context</h2>
					${actionItems(id, modes.context)}
				</div>
			`,
		[modes.home]: () => `
			${actionItems(id, modes.home)}
		`,
		'default': () => `
				<div class="card">
					<h2>Error...</h2>
					<button data-id="${id}" class="home">
						Go Home
					</button>
				</div>
			`
	}

	const { mode, nextMode } = launcher
	const view = (renderers[mode] || renderers['default'])()
	const fadeOut = nextMode && mode !== nextMode

	return `
		<companion class="mode-${mode}">
			<transition class="${fadeOut ? 'out' : ''}" data-id="${id}">
				${view}
			</transition>
		</companion>
		<music-earth></music-earth>			
		`
})

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

		& actions {
			position: absolute;
			right: 1rem;
			bottom: 1rem;
			transform: translateY(100%);
		}

		& *:focus {
			border-radius: none;
			outline: 2px dashed orange;
			outline-offset: .5rem;
		}

		& companion {
			display: grid;
			place-items: center;
			position: relative;
			z-index: 10;
		}

		& button {
			display: block;
			min-height: 3rem;
			margin: 0;
			width: 100%;
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

		& .mode-${modes.home},
		& .mode-${modes.store},
		& .mode-${modes.download},
		& .mode-${modes.settings} {
			background: dodgerblue;
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

		& .mode-${modes.home} transition {
			animation-name: &-zoom-in, &-fade-in;
		}

		& .mode-${modes.home} transition.out {
			animation-name: &-zoom-out, &-fade-out;
		}

		& .card {
			background: rgba(255,255,255,.85);
			color: rgba(0,0,0,.85);
			width: 100%;
		}

		& .card h2 {
			margin: 1rem;
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
	modes.alias,
	modes.context,
	modes.home,
]

function messageStateMachine(message) {
	return ({target}) => {
		const { id } = target.dataset
		stateMachine(id, message)
	}
}

function goTo(mode) {
	return messageStateMachine({ action: actions.goto, mode })
}

function action(action) {
	return messageStateMachine({ action })
}

function stateMachine(id, message) {
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

const coordinates = [
	[-70.285605, 41.651761],
	[-122.290195, 37.528287],
	[-70.729755, 42.014324],
	[-122.496417, 37.606648]
]

const $earth = module('music-earth')

function initialize(target) {
	const { center } = $earth.learn()
	const container = document.createElement('div')
	container.classList.add('map')
	target.appendChild(container)

	target.map = new maplibregl.Map({
		container,
		style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
		center: [0, 0], // starting position [lng, lat]
		zoom: 2
	})

	target.map.on('load', () => start(target.map))
}

function start(map) {
	window.dispatchEvent(new Event('resize'));
	setInterval(() => jump(), 5000)
}

async function jump() {
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
