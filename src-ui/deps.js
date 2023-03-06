import Gun from 'gun';
import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'

import * as focusTrap from 'focus-trap';
import module from './src/system/module.js'
import devices from './src/system/devices.js'

const gun = Gun(['https://gun-manhattan.herokuapp.com/gun'])
const fgun = foot(gun, window.location.pathname)

export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString,
  module,
	foot,
  fgun,
  devices
}

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');

function foot(gun, path) {
	const fgun = gun.get('grapevine').get(path)

	const router = {
		'/edit/': editHandler,
		'/view/': viewHandler,
	}

	const standard = Object.keys(router).filter(x => {
		if(window.location.pathname.startsWith(x)) {
			router[x]()
			return true
		}
		return false
	}).every(x => !x)

	if(standard) {
		standardHandler(path)
	}

	return fgun

	function editHandler() {
		render('edit', {class: 'world'}, "edit")
	}

	function viewHandler() {
		render('view', {class: 'world'}, "view")
	}

	function standardHandler() {
		render('main-stickies')
	}

	function render(element, properties={}, innards='') {
		const attributes = Object.keys(properties).map(key => {
			const value = properties[key]
			console.log(value)
			return `${key}="${value}"`	
		}).join(' ')
		document.body.insertAdjacentHTML("beforeend", `
			<${element} ${attributes}>
				${innards}
			</${element}>
		`)
	}
}
