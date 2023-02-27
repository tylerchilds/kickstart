import module from '../system/module.js'
import '../system/devices.js'

const $ = module('stickies', {
	rootActive: false,
	memory: firstMemories(),
	activeEmbed: `
		<iframe src="/stickies/synthia.html"></iframe>
	`,
})

$.draw((target) => {
	const { memory, activeEmbed, rootActive } = $.learn()
	const memories = Object
		.keys(memory)
		.map(key => memory[key])
		.filter(thinking)

	const stickies = memories
		.map(about => `
			<button data-key="${about.key}">
				${about.title}
			</button>
		`)
		.join('')

	const rootClass = rootActive ? 'active' : ''

	return `
		<div class="${rootClass}">
			<div class="root">
				${stickies}
			</div>
			<div class="leaf">
				${activeEmbed}
			</div>
		</div>
	`
})

function thinking(about) {
	return about ? true : false
}

function firstMemories() {
	return {
		'0': {
			key: '0',
			title: 'Authentication',
			embed: `
				<iframe src="/stickies/authentication.html"></iframe>
			`,
		},
		'1': {
			key: '1',
			title: 'Devices',
			embed: `
				<iframe src="/stickies/devices.html"></iframe>
			`,
		},
		'2': {
			key: '2',
			title: 'Synthia',
			embed: `
				<iframe src="/stickies/synthia.html"></iframe>
			`,
		},
		'3': {
			key: '3',
			title: 'Slides',
			embed: `
				<iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
			`,
		},
		'4': {
			key: '4',
			title: 'hello script',
			embed: `
				<iframe src="/%/hello.script"></iframe>
			`,
		},

	}
}

$.when('click', 'button[data-key]', (event) => {
	const { key } = event.target.dataset
	const { embed } = $.learn().memory[key]
	$.teach({
		activeEmbed: embed,
		rootActive: false
	})
})

$.flair(`
	& .root {
		position: fixed;
		inset: 0;
	}

	& .active .leaf {
		transform: translateY(-100%);
	}

	& .leaf {
		background: dodgerblue;
		position: fixed;
		inset: 0;
		transform: translateY(0);
		transition: transform 200 ease-in-out;
	}

	& .leaf iframe {
		background: dodgerblue;
		border: 0;
		width: 100%;
		height: 100%;
	}
`)

window.onmessage = function(event) {
	const { safeEvent } = event.data
	const { type } = safeEvent

	if(type === 'keydown') {
		window.dispatchEvent(new KeyboardEvent(type, { key: safeEvent.key }));
	}
}

window.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		//if esc key was not pressed in combination with ctrl or alt or shift
		const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
		if (isNotCombinedKey) {
			const { rootActive } = $.learn()
			$.teach({ rootActive: !rootActive })
		}
	}
});