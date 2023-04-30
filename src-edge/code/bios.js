import module from './module.js'
import { actionScript } from './utils.js'

const $ = module('bios')

actionScript($)

$.draw(() => {
  const script = `/scripts${window.location.pathname}.js`

  return `
    <display>
      <div style="float: right;">
        <button data-action="off" data-script="${script}">off</button>
        <button data-action="on" data-script="${script}">on</button>
      </div>
      <code-module src="${script}"></code-module>
    </display>
  `
})
