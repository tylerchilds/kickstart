import module from '/system/module.js'
const $ = module('SecureRender')

window.SecureRender = (target, data, options) => {
  target.style.color = 'green'
}

$.draw(target => {
  window.SecureRender(target, {}, {});
})

export function redo() {
  showModal(`
    <SecureRender>hello</SecureRender>
  `)
}


