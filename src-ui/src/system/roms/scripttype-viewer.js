import module from '../module.js'
import database from '../database.js'
import './hyper-piano.js'

const $ = module('scripttype-viewer')
const sourceLocation = '/scripts/' + window.location.pathname.split('/view/')[1]

database.get(sourceLocation).on(latest => {
  const { formatted } = latest

  console.log(formatted)
  $.teach({ script: formatted })
})

$.draw(target => {
  const { script } = $.learn()
  return script
})
