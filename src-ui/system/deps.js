import Gun from 'gun';
import Color from "colorjs.io";
import { Midi } from '@tonejs/midi'

export {
  Color,
  Midi,
  randomString,
  Gun
}

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');
