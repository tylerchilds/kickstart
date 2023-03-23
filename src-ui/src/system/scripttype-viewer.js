import module from '../system/module.js'
import { gun as database } from '../system/database.js'

const $ = module('scripttype-viewer')
const sourceLocation = '/scripts/' + window.location.pathname.split('/view/')[1]

database.get(sourceLocation).on(latest => {
  const { formatted } = latest
  $.teach({ script: formatted })
})

$.draw(target => {
  const { script } = $.learn()
  return script
})
