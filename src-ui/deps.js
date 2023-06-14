import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'
import database from './src/system/database.js'
import module from './src/system/module.js'

import * as focusTrap from 'focus-trap';

const DEVICE_TABLE = database.get('/devices')
const CHANNEL_TABLE = database.get('/channels')
const MESSAGE_TABLE = database.get('/messages')

const randomString = (length) =>
	[ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');

const device = symbol("/device/")

const $ = module('sos-debugger', {
	observedDevice: device,
})

const helper = {
	log: logger('log', console.log),
	info: logger('info', console.info),
	error: logger('error', console.error),
	warn: logger('warn', console.warn),
  DEVICE_TABLE,
  CHANNEL_TABLE,
  MESSAGE_TABLE,
	database
}

addEventListener("error", (event) => {
	const error = `${event.lineno},${event.colno},${event.message},${event.filename}`
	helper.error(error)
});

DEVICE_TABLE.get(device).put({ id: device, online: true })
onbeforeunload = () => {
	DEVICE_TABLE.get(device).put({ online: false })
}

observe($, DEVICE_TABLE, device)

export {
	Color,
	Midi,
	Tone,
	focusTrap,
	randomString,
	helper,
	logger,
	device,
}

window.helper = helper

function symbol(key) {
	let value = localStorage.getItem(key)

	if (value === null) {
		value = `${key}${randomString(36)}`
		localStorage.setItem(key, value)
	}

	return value
}

function observe($, table, row) {
  table.get(row).map().on((data, column) => {
    const local = $.learn()[row] || {}
    $.teach({ 
      ...local.data,
      [column]: format(data, column)
    }, merge(row))
  })
}

function format(data, key) {
  if(key === 'channels') {
    console.log('ahhh', data, key)
  }

  if(key === 'messages') {
    console.log('messages', data, key)
  }
  return data
}

DEVICE_TABLE.get(device).get('channels').map().on((data, channel) => {
  observe($, CHANNEL_TABLE, channel)
})


function logger(name, output) {
	const channel = channelByName(device, name)
  const node = CHANNEL_TABLE.get(channel).put({ id: channel })
  DEVICE_TABLE.get(device).get('channels').get(channel).put(node)

	return (...args) => {
		output.apply(null, args)
		args.map(x => trace(channel, x))
	}
}

function channelByName(device, name) {
	// osc or http idgaf
	return symbol(`${device}/channel/${name}/`)
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
	CHANNEL_TABLE.get(channel).get('messages').set(`${argument}`)
}

$.draw(() => {
	const data = $.learn()
	const og = data.observedDevice
  debugger

	const logs = data[og].channels.map(key => data[og][key])
	const breakdowns = logs.map((log, i) => `
		<details>
			<summary>
				${ data[og].channels[i] }
			</summary>
			${orderList(log)}
		</details>
	`).join('')

	return `
		${deviceSelector()}
		<br>
		${breakdowns}
	`
})

function deviceSelector() {
	const { metadata, observedDevice } = $.learn()

	const peers = Object.keys(metadata).map(x => metadata[x])
	const options = peers.map(peer => `
		<option
			value="${peer.id}"
			${peer.id === observedDevice ? 'selected' : ''}
		>
			${peer.online ? '1' : '0'},${peer.id}
		</option>
	`).join('')

	return `
		Debug log for:<br>
		<select target="observedDevice">
			${options}
		</select>
	`
}

$.when('change', '[target="observedDevice"]', function(event) {
	const next = event.target.value
  observe($, DEVICE_TABLE, next)
  DEVICE_TABLE.get(next).get('channels').map().on((data) => {
    observe($, CHANNEL_TABLE, data.channel)
  })

	$.teach({ observedDevice: next })
})

function orderList(log) {
	if(!log) {
		return 'no logs...'
	}
	return log.__order.map((key) => `
		${key}: ${log[key]}
	`).join('<br>')
}

helper.log('log0')
helper.error('error0')
helper.warn('warn0')
helper.info('info0')
