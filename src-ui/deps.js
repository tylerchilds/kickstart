import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'

import * as focusTrap from 'focus-trap';

const helper = {
  log: logger(console.log),
  info: logger(console.info),
  error: logger(console.error),
  warn: logger(console.warn),
}

export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString,
  helper
}

function logger(output) {
  return (...args) => {
    output.apply(null, args)
  }
}

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');
