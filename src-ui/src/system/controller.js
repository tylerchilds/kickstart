import '../authentication.js'
import './devices.js'
import './code-module.js'
import '../music-verse.js'
import '../plugins/main-stickies.js'
import './scripttype-editor.js'
import './scripttype-viewer.js'
import '../synth-module.js'

export default function router(database, path) {
	const file = database.get('files').get(path)

	const router = {
		'/authentication/': () => render('authentication'),
		'/devices/': () => render('debug-devices'),
		'/edit/': () => render('scripttype-editor'),
		'/view/': () => render('scripttype-viewer'),
		'/synthia/': () => render('synth-module'),
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
