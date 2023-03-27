import module from '../system/module.js'

const $ = module('main-stickies', {
  rootActive: false,
	stickies: getStickies(),
	activeEmbed: `
		<iframe src="/stickies/music-verse.html"></iframe>
	`,
})

$.draw((target) => {
	const { stickies, activeEmbed, rootActive } = $.learn()
	const filtered = Object
		.keys(stickies)
		.map(key => stickies[key])
		.filter(thinking)

	const list = filtered
		.map(about => `
      <div>
        <button class="launch" data-key="${about.key}">
          ${about.title}
        </button>
      </div>
		`)
		.join('')

	const rootClass = rootActive ? 'active' : ''

	return `
		<div class="${rootClass}">
			<div class="root">
				${list}
			</div>
      <button aria-label="Switcher" class="switcher"></button>
			<div class="leaf">
				${activeEmbed}
			</div>
		</div>
	`
})

function switcher() {
  const { rootActive } = $.learn()
  $.teach({ rootActive: !rootActive })
}

function thinking(about) {
	return about ? true : false
}

function getStickies() {
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
			title: 'view script',
			embed: `
				<iframe src="/view/hello.script"></iframe>
			`,
		},
    '5': {
			key: '5',
			title: 'edit script',
			embed: `
				<iframe src="/edit/hello.script"></iframe>
			`,
		},
		'6': {
			key: '6',
			title: 'MusicVerse',
			embed: `
				<iframe src="/stickies/music-verse.html"></iframe>
			`,
		},

	}
}

$.when('click', 'button.switcher', switcher)

$.when('click', 'button[data-key]', (event) => {
	const { key } = event.target.dataset
	const { embed } = $.learn().stickies[key]
	$.teach({
		activeEmbed: embed,
		rootActive: false
	})
})

$.flair(`
	& .root {
		position: fixed;
		inset: 0;
    padding: 1rem;
	}

	& .active .leaf {
		transform: translateY(-100%);
	}

  & .switcher {
    display: block;
    position: fixed;
    height: 2rem;
    background: orange;
    left: 0;
    right: 0;
    z-index: 10;
    border: 0;
    bottom: 0;
    width: 100%;
  }

  & .active .switcher {
    bottom: auto;
    top: 0;
  }

	& .leaf {
		background: white;
		position: fixed;
		inset: 0 0 2rem 0;
		transform: translateY(0);
		transition: transform 200ms ease-in-out;
	}

	& .leaf iframe {
		border: 0;
		width: 100%;
		height: 100%;
	}

  & .launch {
    background: transparent;
    border: 0;
    text-decoration: underline;
    color: blue;
    padding: .5rem;
    margin: .5rem;
  }
`)

window.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		//if esc key was not pressed in combination with ctrl or alt or shift
		const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
		if (isNotCombinedKey) {
      switcher()
		}
	}
});
