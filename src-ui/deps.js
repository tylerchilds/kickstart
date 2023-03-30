import { gun as database } from './src/system/database.js'
import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'

import './src/system/devices.js'

import './src/system/code-module.js'
import './src/music-verse.js'
import './src/system/scripttype-editor.js'
import './src/system/scripttype-viewer.js'

import './src/plugins/main-stickies.js'

import * as focusTrap from 'focus-trap';

router(database, render, window.location.pathname)

export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString,
}

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');

function render(element, properties={}, innards='') {
  const attributes = Object.keys(properties).map(key => {
    const value = properties[key]
    return `${key}="${value}"`	
  }).join(' ')
  document.body.insertAdjacentHTML("beforeend", `
    <${element} ${attributes}>
      ${innards}
    </${element}>
  `)
}

function router(database, render, path) {
	const file = database.get('files').get(path)

	const router = {
		'/edit/': () => render('scripttype-editor'),
		'/view/': () => render('scripttype-viewer'),
		'/music-verse/': () => render('div', {}, `
        <link href='https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css' rel='stylesheet' />
        <music-verse></music-verse>
    `),
	}

	const blank = Object.keys(router).filter(x => {
		if(window.location.pathname.startsWith(x)) {
			router[x]()
			return true
		}
		return false
	}).every(x => !x)

	if(blank) {
    if(window.top == self.self) {
      render('main-stickies')
    }
	}
}
