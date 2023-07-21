import module from '../module.js'
import database from '../database.js'
import './hyper-piano.js'

import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup"

import { compile } from '../ScriptType.js'

const $ = module('script-type', { file: hello() } )
const $editor = module('script-editor')
const $viewer = module('script-viewer')

function initialize(target) {
  if(target.initialized === true) return
  target.initialized = true
  const sourceLocation = target.getAttribute('src')

  const viewer = document.createElement('script-viewer')
  const editor = document.createElement('script-editor')

  database.get(sourceLocation).on(latest => {
    const { formatted, file } = latest

    console.log(formatted)
    $.teach({ formatted, file })
  })

  target.appendChild(viewer)
  target.appendChild(editor)
}

$.draw(target => {
  initialize(target)
})

$viewer.draw(target => {
  const { formatted } = $.learn()
  return `
    <div class="shadowbox">
      ${formatted}
    </div>
  `
})

$editor.when('click', '.publish', (event) => {
  const { file } = $.learn()
  const formatted = compile(file)
  const sourceLocation = event.target.closest($.link).getAttribute('src')
  database.get(sourceLocation).put({ file, formatted })
})

$editor.when('click', '.print', (event) => {
  const node = event.target.closest($.link)
  const preview = node.querySelector('[name="view"] iframe').contentWindow
  preview.focus()
  preview.print()
})

$editor.draw(target => {
  const { file } = $.learn()

  if(file && !target.view) {
    target.innerHTML = `
      <div name="transport">
        <button class="publish">Publish</button>
        <button class="print">print</button>
      </div>
      <div name="edit"></div>
      <div name="view">
        <iframe src="h;lk" title="Print Preview"></iframe>
      </div>
    `

    const config = {
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
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

$editor.flair(`
  & {
    display: block;
  }

  @media screen {
    & [name="view"] {
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
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

function hello() {
  return `{ screenplay
title: In the Computer
author: Ty

! This feels like a fuzzy dream sequence with everything over exposed except the colors red, blue, and green.

^ fade in
# Int. Computer
In the computer. Like Zoolander. Like Owen Wilson's character's understanding of in the computer. Ty wears three shirts and three hats. Left wears a blue shirt and hat. Right wears a red shirt and hat. Front wears a green shirt and hat.

@ Ty
" Welcome.

@ Left
" See. I said it could.

@ Right
" It wasn't easy.

@ Front
" Whatever, I can sell it.

<hello-world`
}
