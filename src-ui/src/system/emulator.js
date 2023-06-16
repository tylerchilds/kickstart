import module from '../system/module.js'

const $ = module('system-emulator', {
  rootActive: false,
  bookmarks: getBookmarks(),
  activeBookmark: `
    <iframe src="/tutorial/"></iframe>
  `,
})

$.draw((target) => {
  const { bookmarks, activeBookmark, rootActive } = $.learn()
  const filtered = Object
    .keys(bookmarks)
    .map(href => bookmarks[href])
    .filter(thinking)

  const list = filtered
    .map(bookmark => `
      <div class="list-item">
        <button class="launch" data-href="${bookmark.href}">
          ${bookmark.title}
        </button>
      </div>
    `)
    .join('')

  const rootClass = rootActive ? 'active' : ''

  return `
    <div class="${rootClass}">
      <div class="root">
        <div class="stack">
          <details open id="filters">
            <summary>Filters</summary>
            <div class="list-item">
            beep boop form elements
            </div>
          </details>
          <div id="root">
            ${list}
          </div>
          <form id="command-line">
            <input type="text" placeholder=":" name="command" />
          </form>
        </div>
      </div>
      <button aria-label="Switcher" class="switcher"></button>
      <div class="leaf">
        ${activeBookmark}
      </div>
    </div>
  `
})

$.when('submit', '#command-line', function (event) {
  event.preventDefault()
  const { value } = event.target['command']
  alert(value)
})

function switcher({ target }) {
  const rootActive = !$.learn().rootActive
  $.teach({ rootActive })
}

function thinking(about) {
  return about ? true : false
}

function getBookmarks() {
  return {
    '/tutorial/': {
      title: 'Tutorial',
      href: '/tutorial/',
    },
    '/sos-debugger/': {
      title: 'Debugger',
      href: '/sos-debugger/',
    },
    '/devices/': {
      title: 'Devices',
      href: '/devices/',
    },
    '/synthia/': {
      title: 'Synthia',
      href: '/synthia/',
    },
    '/gamepad-test/': {
      title: 'Gamepad Test',
      href: '/gamepad-test/',
    },
    '/view/hello.script': {
      title: 'view script',
      href: '/view/hello.script',
    },
    '/edit/hello.script': {
      title: 'edit script',
      href: '/edit/hello.script',
    },
    '/music-verse/': {
      title: 'MusicVerse',
      href: '/music-verse/',
    },
    '/video-reddit/': {
      title: 'Video Reddit',
      href: '/video-reddit/',
    },
    'http://sillonious:8765': {
      title: 'Gun',
      href: 'http://sillonious:8765',
    },
    'http://sillonious:1989/messages': {
      title: 'Braid',
      href: 'http://sillonious:1989/messages',
    },
    'http://sillonious:8226/examples': {
      title: 'Tag',
      href: 'http://sillonious:8226/examples',
    },
    'http://sillonious:3000': {
      title: 'Solid',
      href: 'http://sillonious:3000',
    },
    '/live-help/': {
      title: 'Live Help',
      href: '/live-help/',
    },
  }
}

$.when('click', 'button.switcher', switcher)

$.when('click', 'button[data-href]', (event) => {
  const data = event.target.dataset
  const { title, href, external } = $.learn().bookmarks[data.href]
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
    activeBookmark: embed,
    rootActive: false
  })

})

$.flair(`
  & .root {
    border-top: 8px solid orange;
    display: none;
    background: white;
    position: fixed;
    left: 8px;
    bottom: 0;
    width: 100%;
    height: 100%;
    height: 640px;
    width: 320px;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    z-index: 5;
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

  & #command-line {
    position: absolute;
    bottom: 0;
    background: white;
    padding-left: 72px;
  }

  & #command-line input {
    display: block;
    height: 2rem;
    font-size: 2rem;
    border: 0;
    box-shadow: -72px -16px 72px 16px rgba(0,0,0,.25);
    max-width: 100%;
  }

  & .switcher {
    display: block;
    position: fixed;
    height: 2rem;
    background: orange;
    top: 0;
    right: 0;
    z-index: 10;
    border: 0;
    width: 72px;
    height: 72px;
    border-radius: 100%;
  }

  & .active .switcher {
    bottom: 0;
    top: auto;
    right: auto;
    left: 0;
  }

  & .leaf {
    background: white;
    position: fixed;
    inset: 0;
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
    filter: grayscale(1) brightness(0.5) contrast(0.5);
  }

  & .launch {
    background: transparent;
    border: 0;
    text-decoration: underline;
    color: blue;
    padding: .5rem;
    margin: .5rem;
  }

  & .stack {
    position: absolute;
    inset: 0;
  }

  & .stack #filters {
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 4px solid orange;
  }

  & .stack #root {
    border-top: 4px solid orange;
    padding-bottom: 4rem;
  }

  & summary {
    color: orange;
  }

  & .stack #command-line {
    position: fixed;
    bottom: 0;
    max-width: 320px;
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
