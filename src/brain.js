import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup"
import {
  css
} from "https://esm.sh/@codemirror/lang-css"
import {
  html
} from "https://esm.sh/@codemirror/lang-html"
import {
  javascript
} from "https://esm.sh/@codemirror/lang-javascript"
import tag
  from "https://thelanding.page/tag/tag.js"

const ENV = {
  PROD: 'production',
  DEV: 'development',
  SAFE: 'safe'
}

window.tag = tag
window.createEditor = (selector, flags = {}) => {
  flags
    ? console.log('Initializing with', {flags})
    : console.log('Initializing with no flags')

  const { path = '' } = flags

  const environments = {
    "": ENV.SAFE,
    "localhost": ENV.DEV,
  }

  const newFlags = {
    ...flags,
    mode: environments[flags.hostname] || ENV.PROD,
    path: path.split('/').slice(0, -1).join('/')
  }

  const $ = tag(selector)

  mount($, newFlags)
  onAutosave($, { ...newFlags, every: 5 })
  onPublish($, newFlags)
  onRecover($, newFlags)
}

const editors = {}

const autosave = upload.bind(null, 'autosave')
const publish = upload.bind(null, 'save')

const config = {
  extensions: [
    basicSetup,
    html(),
    css(),
    javascript(),
    EditorView.lineWrapping
  ]
}

function tree(_$, _flags) {
  return `retrive the files from the current directory`
}

function actions($, flags) {
  return `
    <button data-recover data-id="${flags.path}">
      Recover
    </button>
    ${safePublish($, flags)}
  `
}

function mount($, flags) {
  $.mount(target => {
    $.ready(() => initialize(target, $, flags))
  })
}

function initialize(target, $, flags) {
  // already initialized, quit
  if(editors[flags.path]) return

  layout($, flags)

  const $navigation = tag(`${$.selector} .navigation`)
  const $sidebar = tag(`${$.selector} .sidebar`)

  target.innerHTML = `
    <nav class="navigation"></nav>
    <aside class="sidebar"></aside>
    <main class="code"></main>
    <section class="preview">
      <iframe></iframe>
    </section>
  `

  $navigation.render(() => actions($, flags))
  $sidebar.render(() => tree($, flags))

  const initialState = $.read()
  const { value } = initialState[flags.path] || {}

  preview($, { value })

  const state = EditorState.create({
    ...config,
    ...flags,
    doc: value
  })

  const view = new EditorView({
    lineWrapping: true,
    dispatch: persist($, flags),
    parent: target.querySelector('.code'),
    state
  })

  editors[flags.path] = {
    $,
    state,
    view,
  }

  if(!value) {
    recover($, flags)
  }
}

function safePublish(_$, flags) {
  return flags.mode !== ENV.SAFE
    ? `
      <button data-publish data-id="${flags.path}">
        Publish
      </button>
    ` : ''
}

function onAutosave($, flags) {
  setInterval(() => each($, () => {
		autosave($, flags)
	}), flags.every * 1000)
}

function onPublish($, flags) {
	$.on('click', '[data-publish]', () => {
		publish($, flags)
	})
}

function onRecover($, flags) {
	$.on('click', '[data-recover]', () => {
		recover($, flags)
	})
}

async function upload(mode, $, flags) {
	const currentState = $.read()
	const { value } = currentState[flags.path] || {}

	if(value) {
		// persist to some back up location
		const response = await fetch(flags.path, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				mode,
				value
			})
		});
		
		console.log(response)
	}
}

function persist($, flags) {
	return (transaction) => {
		if(transaction.changes.inserted.length < 0) return

		const { view } = editors[flags.path]
		const value = view.state.doc.toString()
    preview($, { value })
		view.update([transaction])
		$.write({ [flags.path]: { value }})
	}
}

function preview($, flags) {
  const blob = new Blob([flags.value], { type: 'text/html' });
  const href = URL.createObjectURL(blob);
  document.querySelector(`${$.selector} iframe`).src = href
}

async function recover($, flags) {
	const value = await fetch(`${flags.path}`)
		.then(res => res.text())

	const { view } = editors[flags.path]

	view.dispatch({
		changes: {
			from: 0,
			to: view.state.doc.toString().length,
			insert: value
		}
	})
  $.write({ [flags.path]: { value }})
}

function each($, save) {
  return [...document.querySelectorAll($.selector)].map(save)
}

function layout($, _flags) {
  const repl = `
    & {
      display: grid;
      grid-template-areas: "nav nav nav" "sidebar editor preview";
      grid-auto-columns: 180px 1fr 1fr;
      max-width: 100%;
    }

    & .navigation {
      grid-area: nav;
    }

    & .sidebar {
      grid-area: sidebar;
    }

    & .code {
      grid-area: editor;
    }

    & .preview {
      grid-area: preview;
    }

    & iframe {
      height: 100%; border: 0; width: 100%;
    }
  `

  $.css(repl)
}
