import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'
import database from './src/system/database.js'
import module from './src/system/module.js'

import * as focusTrap from 'focus-trap';

let traceCount = 0

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');

let originator = symbol("originator")

const $ = module('sos-debugger', {
  observedOriginator: originator,
  metadata: {}
})

const helper = {
  log: logger('log', console.log),
  info: logger('info', console.info),
  error: logger('error', console.error),
  warn: logger('warn', console.warn),
}

const metadata = database.get('originators')
metadata.get(originator).put({ online: true })
onbeforeunload = () => {
  metadata.get(originator).put({ online: false })
}

metadata.map().on((data, id) => {
  $.teach({ [id]: { ...data, id }}, merge('metadata'))
})

export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString,
  helper,
  logger,
  originator,
  metadata
}

function symbol(key) {
  let value = localStorage.getItem(key)

  if (value === null) {
    value = `dev-${randomString(6)}`
    localStorage.setItem(key, value)
  }

  return value
}

function logger(channel, output) {
  const key = channelKeyByName(channel)
  const { __channels } = $.learn()[originator] || { __channels: [] }

  $.teach({
    __channels: [...__channels, key],
    [key]: { __order: [] }
  }, merge(originator))

  database.get(originator).get(key).map().on((argument, id) => {
    const data = $.learn()[originator][key]
    $.teach({
      [key]: {
        ...data,
        [id]: argument,
        __order: [...data.__order, id]
      }
    }, merge(originator))
  })

  return (...args) => {
    output.apply(null, args)
    args.map(x => trace(channel, x))
  }
}


function channelKeyByName(name) {
  // osc or http idgaf
  return `/channels/channel-${name}`
}

function merge(key) {
  return (state, payload) => {
    return {
      ...state,
      [key]: {
        ...state[key],
        ...payload
      }
    }
  }
}


function trace(channel, argument) {
  const key = channelKeyByName(channel)
  const { __order } = $.learn()[originator][key]
  database.get(originator).get(key).get(traceCount++).put(`${argument}`)
}

$.draw(() => {
  const data = $.learn()
  const og = data.observedOriginator

  const logs = data[og].__channels.map(key => data[og][key])
  const breakdowns = logs.map((log, i) => `
    <details>
      <summary>
        ${ data[og].__channels[i] }
      </summary>
      ${orderList(log)}
    </details>
  `).join('')

  return `
    ${originatorSelector()}
    <br>
    ${breakdowns}
  `
})

function originatorSelector() {
  const { metadata, observedOriginator } = $.learn()

  const peers = Object.keys(metadata).map(x => metadata[x])
  console.log('peers', peers.map(x => x.id))
  const options = peers.map(peer => `
    <option
      value="${peer.id}"
      ${peer.id === observedOriginator ? 'selected' : ''}
    >
      ${peer.online ? '1' : '0'},${peer.id}
    </option>
  `).join('')

  return `
    Debug log for:<br>
    <select target="observedOriginator">
      ${options}
    </select>
  `
}

$.when('change', '[target="observedOriginator"]', function(event) {
  const { value } = event.target
  $.teach({ observedOriginator: value })
})

function orderList(log) {
  return log.__order.map((key) => `
    ${key}: ${log[key]}
  `).join('<br>')
}

helper.log('log0')
helper.error('error0')
helper.warn('warn0')
helper.info('info0')
