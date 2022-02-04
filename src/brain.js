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
    javascript()
  ]
}

function mount($, flags) {
  $.mount(target => {
    $.ready(() => {
      // already initialized, quit
      if(editors[flags.path]) return

			target.innerHTML = `
				<nav class="action-bar">
          <a href="${flags.path}" style="float: right">
            Preview
           </a>
					<button data-recover data-id="${flags.path}">
						Recover
					</button>
          ${safePublish($, flags)}
				</nav>
			`

      const initialState = $.read()
      const copy = initialState[flags.path] || {}

      const state = EditorState.create({
        ...config,
        ...flags,
        doc: copy.value
      })

      const view = new EditorView({
				dispatch: persist($, flags),
        parent: target,
        state
      }) 

      editors[flags.path] = {
        $,
        state,
        view,
      }

			if(!copy.value) {
				recover(flags.path, $)
			}
    })
  })
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
		autosave(flags.path, $)
	}), flags.every * 1000)
}

function onPublish($, flags) {
	$.on('click', '[data-publish]', () => {
		publish(flags.path, $)
	})
}

function onRecover($, flags) {
	$.on('click', '[data-recover]', () => {
		recover(flags.path, $)
	})
}

async function upload(mode, pathname, $) {
	const currentState = $.read()
	const { value } = currentState[pathname] || {}

	if(value) {
		// persist to some back up location
		const response = await fetch(pathname, {
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
		view.update([transaction])
		$.write({ [flags.path]: { value }})
	}
}

async function recover(pathname, _$) {
  debugger
	const value = await fetch(`${pathname}`)
		.then(res => res.text())

	const { view } = editors[pathname]

	view.dispatch({
		changes: {
			from: 0,
			to: view.state.doc.toString().length,
			insert: value
		}
	})
}

function each($, save) {
  return [...document.querySelectorAll($.selector)].map(save)
}
