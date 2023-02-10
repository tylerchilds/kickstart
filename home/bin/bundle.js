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
function module(selector, initialState2 = {}) {
  teach(selector, initialState2);
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
function createStore(initialState2 = {}, notify = () => null) {
  let state = {
    ...initialState2
  };
  const context = {
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
  return context;
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
function persist(_target, $4, _flags) {
  return (update2) => {
    if (update2.changes.inserted.length < 0)
      return;
    const file = update2.view.state.doc.toString();
    $4.teach({ file });
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
  const { gamepads: gamepads2 } = $2.learn();
  return Object.keys(gamepads2).map((id) => ({
    id,
    ...gamepads2[id]
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
function renderGamepads(_target, $4) {
  const { gamepads: gamepads2 } = $4.learn();
  const list = Object.keys(gamepads2).map((key) => gamepads2[key]).map((gamepad, index) => `
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

// home/system/main.js
safe_tauri_default.window.appWindow.show();
