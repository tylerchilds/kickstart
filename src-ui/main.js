import * as dependencies from './deps.js'

import './src/system/code-module.js'
import './src/system/scripttype-editor.js'

import './src/plugins/main-stickies.js'

import safeTauri from './src/system/safe-tauri.js'

console.log.apply(null, [
  'cached dependencies:',
  ...Object.keys(dependencies)
])

safeTauri.window.appWindow.show()

const { invoke } = safeTauri.tauri
const { listen } = safeTauri.event

invoke('list_midi_connections').then(() => {
    invoke('open_midi_connection', { inputIdx: 1 })
})

listen('midi_message', (event) => {
  const payload = event.payload
  const [command, note, velocity] = payload.message

  if (command === 144) {
    setActiveNotes((an) => ({
      ...an,
      velocity,
      [note]: true,
    }))
  }

  // some midi keyboards don't send the off signal,
  // they just set the velocity to 0
  if (command === 128 || velocity === 0) {
    setActiveNotes((an) => ({
      ...an,
      velocity,
      [note]: false,
    }))
  }
})
  .then((ul) => (unlistenRef.current = ul))
  .catch(console.error)

function setActiveNotes(callback) {
  console.log(callback())
}



