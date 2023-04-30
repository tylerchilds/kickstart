import * as dependencies from './deps.js'
import safeTauri from './code/safe-tauri.js'
import router from './code/controller.js'

console.log.apply(null, [
  'cached dependencies:',
  ...Object.keys(dependencies)
])

router(window.location.pathname)

if(true) {
  safeTauri.window.appWindow.show()
}
