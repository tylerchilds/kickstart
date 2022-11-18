import module from '/system/module.js'
import { inject } from '/system/utils.js'

const $ = module('bios', {
  pattern: '-----'
})

$.draw(() => {
  const script = `/scripts/hello.js`

  const buttons = [...new Array(5)].map((x,i) =>
    `<button class="b-${i}"></button>`
  ).join('')

  return `
    <select>
      <option>Hello</option>
      <option>goodbye</option>
    </select>
    ${buttons}

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
