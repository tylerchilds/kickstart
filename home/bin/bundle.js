// home/system/deps.js
import Color from "https://esm.sh/colorjs.io@0.4.0";
import { Midi } from "https://esm.sh/@tonejs/midi";
import * as Tone from "https://esm.sh/tone@next";
import * as focusTrap from "https://esm.sh/focus-trap";

// home/system/code-module.js
import {
  EditorState,
  EditorView,
  basicSetup
} from "https://esm.sh/@codemirror/basic-setup";
import {
  css
} from "https://esm.sh/@codemirror/lang-css";
import {
  html
} from "https://esm.sh/@codemirror/lang-html";
import {
  javascript
} from "https://esm.sh/@codemirror/lang-javascript";

// home/system/module.js
var noop = () => null;
var CREATE_EVENT = "create";
var observableEvents = [CREATE_EVENT];
var reactiveFunctions = {};
function react(selector) {
  (reactiveFunctions[selector] || noop)();
}
var store = createStore({}, react);
function update(target, compositor) {
  const html2 = compositor(target);
  if (html2)
    target.innerHTML = html2;
}
function draw(selector, compositor) {
  listen(CREATE_EVENT, selector, (event) => {
    const draw2 = update.bind(null, event.target, compositor);
    reactiveFunctions[selector] = draw2;
    draw2();
  });
}
function flair(selector, stylesheet) {
  const styles = `
    <style type="text/css" data-module=${selector}>
      ${stylesheet.replaceAll("&", selector)}
    </style>
  `;
  document.body.insertAdjacentHTML("beforeend", styles);
}
function learn(selector) {
  return store.get(selector) || {};
}
function teach(selector, payload, handler = (s, p) => ({ ...s, ...p })) {
  store.set(selector, payload, handler);
}
function when(selector1, eventName, selector2, callback) {
  listen(eventName, `${selector1} ${selector2}`, callback);
}
function module(selector, initialState3 = {}) {
  teach(selector, initialState3);
  return {
    selector,
    learn: learn.bind(null, selector),
    draw: draw.bind(null, selector),
    flair: flair.bind(null, selector),
    when: when.bind(null, selector),
    teach: teach.bind(null, selector)
  };
}
function listen(type, selector, handler = () => null) {
  const callback = (event) => {
    if (event.target && event.target.matches && event.target.matches(selector)) {
      handler.call(null, event);
    }
  };
  document.addEventListener(type, callback, true);
  if (observableEvents.includes(type)) {
    observe(selector);
  }
  return function unlisten() {
    if (type === CREATE_EVENT) {
      disregard(selector);
    }
    document.removeEventListener(type, callback, true);
  };
}
var selectors = [];
function observe(selector) {
  selectors = [.../* @__PURE__ */ new Set([...selectors, selector])];
  maybeCreateReactive([...document.querySelectorAll(selector)]);
}
function disregard(selector) {
  const index = selectors.indexOf(selector);
  if (index >= 0) {
    selectors = [
      ...selectors.slice(0, index),
      ...selectors.slice(index + 1)
    ];
  }
}
function maybeCreateReactive(targets) {
  targets.filter((x) => !x.reactive).forEach(dispatchCreate);
}
function getSubscribers({ target }) {
  if (selectors.length > 0)
    return [...target.querySelectorAll(selectors.join(", "))];
  else
    return [];
}
function dispatchCreate(target) {
  if (!target.id)
    target.id = sufficientlyUniqueId();
  target.dispatchEvent(new Event(CREATE_EVENT));
  target.reactive = true;
}
new MutationObserver((mutationsList) => {
  const targets = [...mutationsList].map(getSubscribers).flatMap((x) => x);
  maybeCreateReactive(targets);
}).observe(document.body, { childList: true, subtree: true });
function sufficientlyUniqueId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function createStore(initialState3 = {}, notify = () => null) {
  let state = {
    ...initialState3
  };
  const context2 = {
    set: function(selector, payload, mergeHandler) {
      const newResource = mergeHandler(state[selector] || {}, payload);
      state = {
        ...state,
        [selector]: newResource
      };
      notify(selector);
    },
    get: function(selector) {
      return state[selector];
    }
  };
  return context2;
}

// home/system/code-module.js
var $ = module("code-module");
$.when("click", ".publish", (event) => {
  const link = event.target.closest($.selector).getAttribute("src");
  const { file } = $.learn();
  fetch(link, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      file
    })
  }).then(() => {
    window.location.href = window.location.href;
  });
});
$.draw((target) => {
  const link = target.getAttribute("src");
  console.log(link);
  const { file, fetching } = $.learn();
  if (!file && !fetching) {
    $.teach({ fetching: true });
    fetch(link).then((res) => res.status === 404 ? (() => {
      throw new Error();
    })() : res).then((res) => res.text()).then((file2) => {
      $.teach({ file: file2, fetching: false });
    }).catch((e) => {
      fetch("/scripts/hello.js").then((res) => res.text()).then((file2) => {
        $.teach({ file: file2, fetching: false });
      });
    });
    return;
  }
  if (file && !target.view) {
    target.innerHTML = `
      <button class="publish">Publish</button>
    `;
    const config = {
      extensions: [
        basicSetup,
        EditorView.updateListener.of(
          persist(target, $, {})
        )
      ]
    };
    const state = EditorState.create({
      ...config,
      doc: file
    });
    target.view = new EditorView({
      parent: target,
      state
    });
  }
});
function persist(_target, $6, _flags) {
  return (update2) => {
    if (update2.changes.inserted.length < 0)
      return;
    const file = update2.view.state.doc.toString();
    $6.teach({ file });
  };
}
$.flair(`
  & {
		display: block;
  }
`);

// home/system/safe-tauri.js
function noop2() {
}
var tauri = window.__TAURI__ || {
  window: {
    appWindow: {
      show: noop2
    }
  },
  tauri: {
    invoke: noop2
  },
  event: {
    listen: noop2
  }
};
var safe_tauri_default = tauri;

// home/system/devices.js
var initialState = { gamepads: {} };
var $2 = module("debug-devices", initialState);
function gamepads() {
  const { gamepads: gamepads4 } = $2.learn();
  return Object.keys(gamepads4).map((id) => ({
    id,
    ...gamepads4[id]
  }));
}
var { invoke } = safe_tauri_default.tauri;
var { listen: listen2 } = safe_tauri_default.event;
var defaultGamepad = { axes: {}, buttons: {} };
var EVENTS = {
  "AxisChanged": onAxisChange,
  "ButtonChanged": onButtonChange
};
await listen2("rs2js", function receive(event) {
  console.log("js: rs2js: " + event.payload);
  const payload = JSON.parse(event.payload) || {};
  if (EVENTS[payload.event]) {
    EVENTS[payload.event](payload);
    requestAnimationFrame(tick);
  }
});
function tick() {
  const panes = [document.querySelector("stickies iframe")];
  console.log({ panes });
  panes.map((node) => {
    node.contentWindow.postMessage({
      event: "tick",
      gamepads: gamepads()
    }, "*");
  });
}
function onAxisChange({ id, key, value }) {
  $2.teach({ key, value }, mergeAxisChange(id));
}
function onButtonChange({ id, key, value }) {
  $2.teach({ key, value }, mergeButtonChange(id));
}
function mergeAxisChange(id) {
  return (state, payload) => {
    const gamepad = state.gamepads[id] || defaultGamepad;
    return {
      ...state,
      gamepads: {
        ...state.gamepads,
        [id]: {
          ...gamepad,
          axes: {
            ...gamepad.axes,
            [payload.key]: payload.value
          }
        }
      }
    };
  };
}
function mergeButtonChange(id) {
  return (state, payload) => {
    const gamepad = state.gamepads[id] || defaultGamepad;
    return {
      ...state,
      gamepads: {
        ...state.gamepads,
        [id]: {
          ...gamepad,
          buttons: {
            ...gamepad.buttons,
            [payload.key]: payload.value
          }
        }
      }
    };
  };
}
$2.draw((target) => renderGamepads(target, $2));
$2.flair(`
  & .gamepads {
    list-style-type: none;
  }
  & .gamepad {
  }
  & .buttons,
  & .axes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    list-style-type: none;
    padding: .5rem 0 0;
  }
  & .input {
    background: linear-gradient(lime 0%, orange 50%, rebeccapurple 100%);
    background-size: 1px 6rem;
    background-repeat: repeat-x;
    background-position-y: var(--value);
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
  }
`);
function renderGamepads(_target, $6) {
  const { gamepads: gamepads4 } = $6.learn();
  const list = Object.keys(gamepads4).map((key) => gamepads4[key]).map((gamepad, index) => `
      <div class="gamepad" id="${gamepad.id}">
        Buttons: ${Object.keys(gamepad.buttons).map((key) => key + ": " + gamepad.buttons[key])}
        <br/>
        Axes: ${Object.keys(gamepad.axes).map((key) => key + ": " + gamepad.axes[key])}
      </div>
    `).join("");
  return `<div class="gamepads">${list}</div>`;
}

// home/system/stickies.js
var $3 = module("stickies", {
  rootActive: false,
  memory: firstMemories(),
  activeEmbed: `
    <iframe src="/stickies/synthia.html"></iframe>
  `
});
$3.draw((target) => {
  const { memory, activeEmbed, rootActive } = $3.learn();
  const memories = Object.keys(memory).map((key) => memory[key]).filter(thinking);
  const stickies = memories.map((about) => `
      <button data-key="${about.key}">
        ${about.title}
      </button>
    `).join("");
  const rootClass = rootActive ? "active" : "";
  return `
    <div class="${rootClass}">
      <div class="root">
        ${stickies}
      </div>
      <div class="leaf">
        ${activeEmbed}
      </div>
    </div>
  `;
});
function thinking(about) {
  return about ? true : false;
}
function firstMemories() {
  return {
    "0": {
      key: "0",
      title: "Authentication",
      embed: `
        <iframe src="/stickies/authentication.html"></iframe>
      `
    },
    "1": {
      key: "1",
      title: "Devices",
      embed: `
        <iframe src="/stickies/devices.html"></iframe>
      `
    },
    "2": {
      key: "2",
      title: "Synthia",
      embed: `
        <iframe src="/stickies/synthia.html"></iframe>
      `
    },
    "3": {
      key: "3",
      title: "Slides",
      embed: `
        <iframe src="https://sillyz.computer/pages/slides/2022-js"></iframe>
      `
    }
  };
}
$3.when("click", "button[data-key]", (event) => {
  const { key } = event.target.dataset;
  const { embed } = $3.learn().memory[key];
  $3.teach({
    activeEmbed: embed
  });
});
$3.flair(`
  .root {
    position: fixed;
    inset: 0;
  }
  .leaf {
    background: dodgerblue;
    position: fixed;
    inset: 0;
  }

  .leaf iframe {
    background: dodgerblue;
    border: 0;
    width: 100%;
    height: 100%;
  }
`);

// home/scripts/guitar.js
var gamepads2 = [];
addEventListener("message", (event) => {
  if (event.data.event == "tick") {
    console.log(event.data);
    gamepads2 = [...event.data.gamepads];
  }
}, false);
var initialState2 = {
  activeFrets: [],
  activeRegisters: [],
  frames: {}
};
var $4 = module("guitar-debug", initialState2);
var fretMap = ["South", "East", "West", "North", "LeftTrigger"];
var registers = [
  "     ",
  "x    ",
  "x   x",
  " x   ",
  " x  x",
  "  x  ",
  "  x x",
  "   x ",
  "   xx",
  "xx   ",
  "xx  x",
  " xx  ",
  " xx x",
  "x x x",
  "xxxxx"
];
requestAnimationFrame(loop);
function loop(time) {
  const activeFrets = gamepads2.map((x) => toFrets($4, x));
  const activeRegisters = activeFrets.map((x) => toRegisters($4, x));
  $4.teach({
    time,
    activeFrets,
    activeRegisters
  });
  requestAnimationFrame(loop);
}
$4.draw(() => {
  const {
    activeRegisters
  } = $4.learn();
  return activeRegisters.map((x, i) => `
    <div>
      ${x}
    </div>
  `).join("");
});
function toFrets(_$, flags) {
  return fretMap.map((x) => {
    const value = flags.buttons[x];
    return value === 1 ? "x" : " ";
  }).join("");
}
function toRegisters(_$, frets) {
  return registers.indexOf(frets);
}
$4.flair(`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100vw;
    place-items: center;
  }
  & .note {
    font-size: 10vh;
    line-height: 1;
  }

  & .strummed {
    transform: scale(2);
  }
`);
var guitar_default = $4;

// home/scripts/synth-module.js
var start = /* @__PURE__ */ new Date();
var midi = new Midi();
var track = midi.addTrack();
console.log(midi);
var gamepads3 = [];
addEventListener("message", (event) => {
  if (event.data.event == "tick") {
    gamepads3 = [...event.data.gamepads];
  }
}, false);
var context = new AudioContext();
async function loadSample(url) {
  const sample = await fetch(url).then((response) => response.arrayBuffer()).then((buffer) => context.decodeAudioData(buffer));
  return sample;
}
function playSample(name, sample, sampleNote, noteToPlay) {
  track.addNote({
    name,
    time: (/* @__PURE__ */ new Date() - start) / 1e3,
    duration: 0.2
  });
  const source = context.createBufferSource();
  source.buffer = sample;
  source.playbackRate.value = 2 ** ((noteToPlay - sampleNote) / 12);
  source.connect(context.destination);
  source.start(0);
}
var synths = [];
Promise.all([
  loadSample("/samples/1.mp3"),
  loadSample("/samples/2.mp3"),
  loadSample("/samples/3.mp3"),
  loadSample("/samples/4.mp3"),
  loadSample("/samples/5.mp3"),
  loadSample("/samples/6.mp3"),
  loadSample("/samples/7.mp3"),
  loadSample("/samples/8.mp3")
]).then((s) => synths = s);
var $5 = module("synth-module", {
  colors: [],
  start: 120,
  length: 360,
  octave: 4,
  reverse: false,
  pitch: 0,
  synth: 0
});
var strumVelocity = 75;
var sustainedDuration = 100;
var actionableFPS = 4;
var majorScale = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "Db",
  "Ab",
  "Eb",
  "Bb",
  "F"
];
var minorScale = [
  "a",
  "e",
  "b",
  "f#",
  "c#",
  "g#",
  "d#",
  "bb",
  "f",
  "c",
  "g",
  "d"
];
var lightnessStops = [
  [5, 30],
  [20, 45],
  [35, 60],
  [50, 75],
  [65, 90],
  [80, 105],
  [95, 120]
];
var octaveUp = () => {
  const octave = $5.learn().octave + 1;
  if (octave > 6) {
    return;
  }
  $5.teach({ octave });
};
var octaveDown = () => {
  const octave = $5.learn().octave - 1;
  if (octave < 0) {
    return;
  }
  $5.teach({ octave });
};
var pitchUp = () => {
  const pitch = $5.learn().pitch + 1;
  $5.teach({ pitch });
};
var pitchDown = () => {
  const pitch = $5.learn().pitch - 1;
  $5.teach({ pitch });
};
function attack(event) {
  event.preventDefault();
  const { colors, synth } = $5.learn();
  const { octave, note, hue, name } = event.target.dataset;
  playSample(name, synths[synth], 60, parseInt(octave) * 12 + (12 + parseInt(note)));
  event.target.classList.add("active");
  const body = new Color(colors[parseInt(hue)][parseInt(octave)].value).to("srgb");
  document.querySelector("body").style.setProperty("background", body);
}
function release(event) {
  event.preventDefault();
  event.target.classList.remove("active");
}
var chords = [
  [],
  [0, 4, 1],
  // c major: c - e - g
  [0, 9, 1],
  // c minor: c - eb - g
  [1, 5, 2],
  // g major: g - b - d
  [1, 10, 2],
  // g minor: g - bb - d
  [2, 6, 3],
  // d major: d - f# - a
  [2, 11, 3],
  // d minor: d - f - a
  [4, 8, 5],
  // e major: e - g# - b
  [4, 2, 5],
  // e minor: e - g - b
  [3, 9, 4],
  // a major: a - c# - e
  [3, 0, 4],
  // a minor: a - c - e
  [11, 3, 0],
  // f major: f - a - c
  [11, 8, 0],
  // f minor: f - ab - c
  [],
  // octave picker
  []
  // pitch picker
];
var activeSynths = [];
requestAnimationFrame(loop2);
function loop2(time) {
  const { activeRegisters, activeFrets } = guitar_default.learn();
  gamepads3.map((gamepad, i) => {
    const register = activeRegisters[i];
    const up = gamepad.buttons["DPadUp"] === 1;
    const down = gamepad.buttons["DPadDown"] === 1;
    if (activeFrets[i] === "x x x") {
      [[up, octaveUp], [down, octaveDown]].map(([flag, feature2]) => {
        flag && throttle({ key: "octave-shift", time, feature: feature2 });
      });
    }
    if (activeFrets[i] === "xxxxx") {
      [[up, pitchUp], [down, pitchDown]].map(([flag, feature2]) => {
        flag && throttle({ key: "pitch-shift", time, feature: feature2 });
      });
    }
    if (!chords[register])
      return;
    const feature = () => {
      if (up || down && register > 0) {
        activeSynths = chords[register];
        activeSynths.map((x, i2) => {
          const index = down ? x : activeSynths[activeSynths.length - 1 - i2];
          const node = document.querySelector(`[data-index='${index}']`);
          node && queueAttack(node, i2);
        });
      }
    };
    feature();
  });
  requestAnimationFrame(loop2);
}
function throttle({ key, time, feature }) {
  const { frames = {} } = $5.learn();
  const frame = frames[key] || {};
  if (time - 1e3 / actionableFPS > (frame.time || 0)) {
    feature();
    $5.teach({ time }, (state, payload) => {
      return {
        ...state,
        frames: {
          ...frames,
          [key]: {
            time: payload.time
          }
        }
      };
    });
  }
}
function queueRelease(node) {
  setTimeout(() => {
    node.dispatchEvent(new Event("touchend"));
  }, sustainedDuration);
}
function queueAttack(node, i) {
  setTimeout(() => {
    node.dispatchEvent(new Event("touchstart"));
    queueRelease(node);
  }, i * strumVelocity);
}
$5.teach({ colors: recalculate() });
$5.draw(() => {
  const { start: start2, length, reverse, colors, octave, pitch, debug } = $5.learn();
  const wheel = majorScale.map((majorNote, index) => {
    const majorScaleIndex = mod(index - pitch * 7, majorScale.length);
    const minorNote = minorScale[mod(majorScaleIndex + pitch * 7, minorScale.length)];
    const minorScaleIndex = mod(majorScaleIndex + 3, minorScale.length);
    const majorColorIndex = mod(
      mod(majorScaleIndex * 7, colors.length) + pitch,
      colors.length
    );
    const minorColorIndex = mod(
      mod(minorScaleIndex * 7, colors.length) + pitch,
      colors.length
    );
    const majorColorScales = colors[majorColorIndex].map((x) => x.value);
    const minorColorScales = colors[minorColorIndex].map((x) => x.value);
    const majorStepClass = majorNote.length === 2 ? "step half" : "step";
    const minorStepClass = minorNote.length === 2 ? "step half" : "step";
    const majorSynth = majorScaleIndex;
    const minorSynth = minorScaleIndex + majorScale.length;
    const note = mod(index * 7, majorScale.length);
    return `
      <div class="group" style="
				transform: rotate(${majorScaleIndex * 30}deg)
				
			">
        <button
          class="${majorStepClass}"
					data-index="${majorSynth}"
          data-octave="${octave}"
          data-note="${note}"
          data-name="${majorScale[note]}${octave}"
					data-hue="${majorColorIndex}"
          style="${gradient(majorColorScales, [4, 3, 2])}"
        >
        </button>
        <button
          class="${minorStepClass}"
					data-index="${minorSynth}"
          data-octave="${octave}"
          data-note="${minorScaleIndex}"
          data-name="${minorScale[minorScaleIndex]}${octave}"
					data-hue="${minorColorIndex}"
          style="${gradient(minorColorScales, [4, 3, 2])}"
        >
        </button>
      </div>
    `;
  }).join("");
  return `
    <a href="javascript://lol;">Export</a>
    <div class="wheel">
      ${wheel}
			${controls()}
    </div>
  `;
});
$5.when("click", '[href="javascript://lol;"]', (event) => {
  event.preventDefault();
  const exportUrl = URL.createObjectURL(new Blob([
    midi.toArray()
  ], { type: "audio/midi" }));
  const href = document.createElement("a");
  href.href = exportUrl;
  href.download = `${(/* @__PURE__ */ new Date()).toISOString()}.mid`;
  href.target = "_blank";
  href.click();
  URL.revokeObjectURL(exportUrl);
});
function controls() {
  return `
		<div class="controls" style="display: none;">
			<button class="octave-up"></button>
			<button class="pitch-up"></button>
			<button class="pitch-down"></button>
			<button class="octave-down"></button>
		</div>
	`;
}
$5.when("click", ".octave-up", octaveUp);
$5.when("click", ".octave-down", octaveDown);
$5.when("click", ".pitch-up", pitchUp);
$5.when("click", ".pitch-down", pitchDown);
$5.flair(`
  & {
    height: 100%;
    display: grid;
    place-content: center;
  }
  & .wheel {
    display: grid;
    grid-template-areas: "slot";
    grid-template-rows: 45vmin;
    grid-template-columns: 40vmin;
    place-content: start center;
    padding: 0 1rem;
    height: 90vmin;
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
    touch-action: manipulation;
  }
  & .group {
    grid-area: slot;
    transform-origin: bottom;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    clip-path: polygon(20% 0%, 50% 100%, 80% 0%);
    gap: 1px;
  }
  & .step {
    border: none;
    width: 100%;
    height: auto;
    display: grid;
    place-items: start;
    color: black;
		position: relative;
  }

  & .step.half {
    color: white;
  }

	& .step::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			rgba(0, 0, 0, .25),
			transparent,
			rgba(255, 255, 255, .75),
			transparent,
			transparent,
			transparent
		);
		background-size: 300% 300%;
		background-position-y: 100%;
		animation: &-decay 100ms ease-out forwards;
	}

	& .step.active::before {
		animation: &-attack 100ms ease-out forwards;
	}

	@keyframes &-attack {
		0% {
			background-position-y: 50%;
		}
		100% {
			background-position-y: 0%;
		}
	}

	@keyframes &-decay {
		0% {
			background-position-y: 50%;
		}
		100% {
			background-position-y: 100%;
		}
	}

  ${invertedLabels()}
`);
function invertedLabels() {
  const rulesets = [];
  for (let i = 1; i < 360; i++) {
    rulesets.push(`
      & [style*="rotate(${i}deg)"] label {
        transform: rotate(${-1 * i}deg);
      }
    `);
  }
  return rulesets.join("");
}
function gradient(scale, stops) {
  return `
    background: linear-gradient(${stops.map((x) => scale[x]).join(", ")})
  `;
}
function recalculate() {
  const { start: start2, length, reverse } = $5.learn();
  const colors = [...Array(12)].map((_, hueIndex) => {
    const step = length / 12 * hueIndex;
    const hue = reverse ? start2 - step : start2 + step;
    return lightnessStops.map(([l, c], i) => {
      const name = `--wheel-${hueIndex}-${i}`;
      const value = new Color("lch", [l, c, hue]).display().toString({ format: "hex" });
      return {
        name,
        value,
        block: hueIndex,
        inline: i
      };
    });
  });
  return colors;
}
$5.when("mousedown", ".step", attack);
$5.when("mouseup", ".step", release);
$5.when("touchstart", ".step", attack);
$5.when("touchend", ".step", release);
function mod(x, n) {
  return (x % n + n) % n;
}

// home/system/main.js
safe_tauri_default.window.appWindow.show();
