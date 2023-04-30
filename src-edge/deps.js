//import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'
import * as Tone from 'tone'

import * as focusTrap from 'focus-trap';

export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString,
}

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');
