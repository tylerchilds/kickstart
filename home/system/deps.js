import * as focusTrap from 'https://esm.sh/focus-trap';
import Color from "https://esm.sh/colorjs.io@0.4.0";

const randomString = (length) =>
  [ ...Array(length) ].map(() => (~~(Math.random() * 36)).toString(36)).join('');

export {
  randomString,
  Color,
  focusTrap,
}
