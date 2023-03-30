import { gun as database } from './src/system/database.js'
import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'

import './src/system/devices.js'

import * as focusTrap from 'focus-trap';

export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString,
  database
}

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');
