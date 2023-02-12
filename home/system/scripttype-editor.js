import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup"

import module from '../system/module.js'

const $ = module('scripttype-editor')
const sourceLocation = '/customs/' + window.location.pathname.split('/%/')[1]
const viewLocation = '/$/' + window.location.pathname.split('/%/')[1]

$.when('click', '.publish', (event) => {
  const { file } = $.learn()

	fetch(sourceLocation, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			file
		})
	}).then(() => {
    window.location.href = window.location.href
  })
})

$.when('click', '.print', (event) => {
  const node = event.target.closest($.selector)
  const preview = node.querySelector('[name="view"] iframe').contentWindow
  preview.focus()
  preview.print()
})

$.draw(target => {
  const { file, fetching } = $.learn()

  if(!file && !fetching) {
    $.teach({ fetching: true })
    fetch(sourceLocation)
      .then(res => res.status === 404 ? (() => {throw new Error()})() : res )
      .then(res => res.text())
      .then((file) => {
        $.teach({ file, fetching: false })
      }).catch(e => {
        fetch('/$/hello.script')
          .then(res => res.text())
          .then((file) => {
            $.teach({ file, fetching: false })
          })
      })
    return
  }

  if(file && !target.view) {
    target.innerHTML = `
      <div name="transport">
        <button class="publish">Publish</button>
        <button class="print">print</button>
      </div>
      <div name="edit"></div>
      <div name="view">
        <iframe src="${viewLocation}" title="Print Preview"></iframe>
      </div>
    `

    const config = {
      extensions: [
        basicSetup,
        EditorView.updateListener.of(
          persist(target, $, {})
        )
      ]
    }

    const state = EditorState.create({
      ...config,
      doc: file
    })

    target.view = new EditorView({
      parent: target.querySelector('[name="edit"]'),
      state
    })
  }
})

function persist(_target, $, _flags) {
	return (update) => {
    if(update.changes.inserted.length < 0) return

		const file = update.view.state.doc.toString()
    $.teach({ file })
	}
}

$.flair(`
  & {
		display: grid;
    grid-template-areas: "transport transport" "edit view";
    grid-template-columns: 1fr 1fr;
  }

  & [name="transport"] {
    grid-area: transport;
  }
  & [name="view"] {
    grid-area: view;
  }

  & [name="edit"] {
    grid-area: edit;
  }

  @media print {
    & [name="view"] {
      display: block;
    }

    & [name="transport"],
    & [name="edit"] {
      display: none;
    }
  }
`)
