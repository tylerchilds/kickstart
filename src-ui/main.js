import * as dependencies from './deps.js'
import safeTauri from './src/system/safe-tauri.js'
import router from './src/system/controller.js'

console.log.apply(null, [
  'cached dependencies:',
  ...Object.keys(dependencies)
])

router(dependencies.database, window.location.pathname)

if(true) {
  safeTauri.window.appWindow.show()
}
