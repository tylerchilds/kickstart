import module from '/system/module.js'
import { inject } from '/system/utils.js'

const $ = module('bios')

$.draw(() => {
  const script = `/scripts${window.location.pathname}.js`

  return `
    <code-module src="${script}"></code-module>
    <button data-action="undo" data-script="${script}">undo</button>
    <button data-action="redo" data-script="${script}">redo</button>
  `
})

$.when('click', '[data-script]', async (event) => {
  const { action, script } = event.target.dataset
  const dispatch = (await inject(
    await fetch(script).then(x => x.text())
  ))[action]
  dispatch(event, $)
})
