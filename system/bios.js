import module from '/system/module.js'

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
	debugger
  const dispatch = (await import(script))[action]
  dispatch(event, $)
})
