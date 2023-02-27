import '/system/SecureRender.js'
import { showModal, hideModal } from '/system/modal-module.js'

export function on() {
  showModal(`
    <SecureRender>hello</SecureRender>
  `)
}

export function off() {
  hideModal()
}
