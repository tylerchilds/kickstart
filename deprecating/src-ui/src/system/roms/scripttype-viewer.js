import module from '../module.js'

const $ = module('scripttype-viewer')
const sourceLocation = '/scripts/' + window.location.pathname.split('/view/')[1]

$.draw(target => {
  const { script } = $.learn()
  return script
})
