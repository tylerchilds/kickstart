function noop() { return new Promise((resolve) =>resolve())}

const tauri = window.__TAURI__ || {
  window: {
    appWindow: {
      show: noop
    }
  },
  tauri: {
    invoke: noop,
  },
  event: {
    listen: noop
  }
}

export default tauri
