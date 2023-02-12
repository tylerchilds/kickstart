import Color from "https://esm.sh/colorjs.io@0.4.0";
import { Midi } from "https://esm.sh/@tonejs/midi";
import * as Tone from "https://esm.sh/tone@next";
import * as focusTrap from "https://esm.sh/focus-trap";
const randomString = (length) => [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join("");
export {
  Color,
  Midi,
  Tone,
  focusTrap,
  randomString
};
