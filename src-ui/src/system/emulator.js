import module from '../system/module.js'

const $ = module('system-emulator', {
  rootActive: false,
	stickies: getStickies(),
	activeEmbed: `
		<iframe src="/tutorial/"></iframe>
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
      <div class="list-item">
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

function switcher({ target }) {
  const rootActive = !$.learn().rootActive
  toggleFullScreen(!rootActive, target)
  $.teach({ rootActive })
}

function thinking(about) {
	return about ? true : false
}

function getStickies() {
	return {
		'0': {
			key: '0',
			title: 'Tutorial',
      href: '/tutorial/',
		},
		'1': {
			key: '1',
			title: 'Devices',
      href: '/devices/',
		},
		'2': {
			key: '2',
			title: 'Synthia',
      href: '/synthia/',
		},
		'3': {
			key: '3',
			title: 'Slides',
      href: 'https://sillyz.computer/pages/slides/2022-js',
		},
		'4': {
			key: '4',
			title: 'view script',
      href: '/view/hello.script',
		},
    '5': {
			key: '5',
			title: 'edit script',
      href: '/edit/hello.script',
		},
		'6': {
			key: '6',
			title: 'MusicVerse',
      href: '/music-verse/',
		},
    '7': {
			key: '7',
			title: 'Video Reddit',
      href: '/video-reddit/',
		},
		'8': {
			key: '8',
			title: 'Gun',
      href: 'http://sillonious:8765',
		},
		'9': {
			key: '9',
			title: 'Braid',
      href: 'http://sillonious:1989/messages',
		},
		'11': {
			key: '11',
			title: 'Tag',
      href: 'http://sillonious:8226/examples',
		},
		'12': {
			key: '12',
			title: 'Solid',
      href: 'http://sillonious:3000',
		},
    '99': {
      key: '99',
      title: 'Live Help',
      href: '/live-help/',
    },
	}
}

$.when('click', 'button.switcher', switcher)

$.when('click', 'button[data-key]', (event) => {
	const { key } = event.target.dataset
	const { title, href, external } = $.learn().stickies[key]
  const root = event.target.closest($.link)

  if(external) {
    window.open(href, '_blank')
    return
  }

  const embed = `
    <iframe src="${href}" title="${title}"></iframe>
  `

	openFullScreen(root)

	$.teach({
		activeEmbed: embed,
		rootActive: false
	})

})

$.flair(`
	& .root {
    display: none;
    background: white;
		position: fixed;
		inset: 0;
    padding: 2rem 0 1rem;
		overflow: auto;
	}

	& .root::before {
		content: '';
		border-left: 1px solid red;
		position: fixed;
		left: 1rem;
		top: 0;
		bottom: 0;
	}

	& .list-item {
		padding-left: 1rem;
		border-bottom: 1px solid cyan;
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

	& .active .root {
    display: block;
  }

	& .active .leaf {
    display: none;
		transform: translateY(-100%);
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
      document.querySelector(`${$.link} .switcher`).click()
		}
	}
});

function toggleFullScreen(yes, what) {
	yes ? openFullScreen(what) : closeFullScreen()
}

function openFullScreen(element) {
  try {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
      element.msRequestFullscreen();
    }
  } catch(e) {
    alert(e)
  }
}

/* Close fullscreen */
function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
