import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup"

import module from '../system/module.js'

const $ = module('scripttype-editor')
const link = '/customs/' + window.location.pathname.split('/%/')[1]
console.log(link)

$.when('click', '.publish', (event) => {
  const { file } = $.learn()

	fetch(link, {
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

$.draw(target => {
  const { file, fetching } = $.learn()

  if(!file && !fetching) {
    $.teach({ fetching: true })
    fetch(link)
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
      <button class="publish">Publish</button>
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
      parent: target,
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
		display: block;
  }
`)
