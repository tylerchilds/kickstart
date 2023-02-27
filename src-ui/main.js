import * as dependencies from './deps.js'

import './system/code-module.js'
import './system/scripttype-editor.js'
import './system/stickies.js'

import safeTauri from './system/safe-tauri.js'

console.log.apply(null, [
  'cached dependencies:',
  ...Object.keys(dependencies)
])

safeTauri.window.appWindow.show()
