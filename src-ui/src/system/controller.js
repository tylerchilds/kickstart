import './emulator.js'

import './roms/authentication.js'
import './roms/devices.js'
import './roms/code-module.js'
import './roms/scripttype-editor.js'
import './roms/scripttype-viewer.js'
import './roms/synth-module.js'
import './roms/music-verse.js'
import './roms/video-reddit.js'

export default function router(path) {
	const router = {
		'/authentication/': () => render('authentication'),
		'/devices/': () => render('debug-devices'),
		'/edit/': () => render('scripttype-editor'),
		'/view/': () => render('scripttype-viewer'),
		'/synthia/': () => render('synth-module'),
		'/video-reddit/': () => render('div', {}, `
      <control-box label="subs" options="videos"></control-box>
      <video-reddit title="Hello Reddit" r="videos" sort="hot"></video-reddit>

    `),
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
      render('system-emulator')
    }
	}
}
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


addEventListener('keydown', (event) => {
  console.log('yo')
  const message = {
    event: 'KeyboardInput',
    type: event.type,
    key: event.key
  }

  if(window.top !== self.self) {
    self.top.postMessage({
      payload: JSON.stringify(message),
      stopPropogation: true
    })
  }
});
