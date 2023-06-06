import * as dependencies from './deps.js'
import safeTauri from './src/system/safe-tauri.js'
import router from './src/system/controller.js'

const { helper } = dependencies

helper.log(
  'cached dependencies:',
  ...Object.keys(dependencies)
)

router(window.location.pathname)

if(true) {
  safeTauri.window.appWindow.show()
}
