import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup"

import module from '../module.js'
import database from '../database.js'
import { compile } from '../ScriptType.js'

const $ = module('scripttype-editor', { file: hello() })
const sourceLocation = '/scripts/' + window.location.pathname.split('/edit/')[1]
const viewLocation = '/view/' + window.location.pathname.split('/edit/')[1]

database.get(sourceLocation).on(latest => {
    const { file } = latest

    console.log(file)
    $.teach({ file })
})

$.when('click', '.publish', (event) => {
  const { file } = $.learn()
  const formatted = compile(file)
  database.get(sourceLocation).put({ file, formatted })
})

$.when('click', '.print', (event) => {
  const node = event.target.closest($.link)
  const preview = node.querySelector('[name="view"] iframe').contentWindow
  preview.focus()
  preview.print()
})

$.draw(target => {
  const { file } = $.learn()

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

$.flair(`
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
