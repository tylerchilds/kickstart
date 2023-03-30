import * as dependencies from './deps.js'
import safeTauri from './src/system/safe-tauri.js'

console.log.apply(null, [
  'cached dependencies:',
  ...Object.keys(dependencies)
])

if(true) {
  safeTauri.window.appWindow.show()
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
