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
