import module from '/system/module.js'
import { showModal, hideModal } from '/system/modal-module.js'

const encryptedData = {}
const options = {}
window.SecureRender = (target, data, options) => {
  target.style.transform = 'rotate(180deg)'
}

const $ = module('SecureRender')

$.draw(target => {
  window.SecureRender(target, {...encryptedData}, {...options});
})

export function redo() {
  showModal(`
    <SecureRender>hello</SecureRender>
  `)
}

export function undo() {
  hideModal()
}
