import module from '../module.js'
import $controlBox from '../../control-box.js'

const emptyReddit = {
  children: [],
  position: 0,
  after: "",
  before: ""
}

const $ = module('video-reddit')

function redditById(id) {
  return $.learn()[id] || emptyReddit
}

$.when('click', '.reset', paginate('reset'))
$.when('click', '.more', paginate('after'))

$.when('click', '.back', step(-1))
$.when('click', '.next', step(+1))

$.draw(target => {
  const { children = [], loading, position } = query(target)

  if(children.length === 0) return `
    <control-box label="subs" options="videos"></control-box>
  `

  return `
      <control-box label="subs" options="videos"></control-box>
      <div class="controls">
        <button class="reset" data-id="${target.id}">Reset</button>
        <button class="more" data-id="${target.id}">Go Deeper</button>
        <button class="back" data-id="${target.id}">
          Back
        </button>
        <button class="next" data-id="${target.id}">
          Next
        </button>
      </div>
      <figure class="${loading ? 'loading' : ''}">
        ${renderPost(children[position].data)}
      </figure>
    `
})

function renderPost(data) {
  const renderers = {
    'image': (data) => `
        <a href="${data.url}">${data.title}</a>
        (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
        <img src="${data.url}" />
      `,
    'hosted:video': (data) => `
        <a href="${data.url}">${data.title}</a>
        (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
        <video controls muted="false" autoplay>
          <source src="${data.secure_media.reddit_video.fallback_url}" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      `,
    'rich:video': (data) => `
        <a href="${data.url}">${data.title}</a>
        (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
        ${htmlDecode(data.secure_media.oembed.html)}
      `,
    'link': (data) => `
        <a href="${data.url}">${data.title}</a>
        (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
          <video controls muted="false" autoplay>
            <source src="${data.preview.reddit_video_preview.fallback_url}" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
      `,

    'default': (data) => `
        <a href="${data.url}">${data.title}</a>
        (<a href="https://old.reddit.com${data.permalink}">Permalink</a>)
      `
  }

  return (renderers[data.post_hint] || renderers['default'])(data)
}

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

$.flair(`
    & {
      border: 1px solid black;
      border-radius: 2px;
      display: block;
      padding: 1rem;
      position: fixed;
      inset: 0;
      background: black;
      color: white;
    }

    & .loading {
      opacity: .5;
      pointer-events: none;
    }

    & .controls {
      position: fixed;
      z-index: 1;
      bottom: 0;
      right: 0;
    }

    & figure,
    & figure > iframe {
      position: fixed;
      inset: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }

    & h2 {
      margin: 0 0 1rem;
    }

    & ol {
      max-height: 320px;
      overflow-y: auto;
      margin-left: -1rem;
      margin-right: -1rem;
    }

    & li {
      margin-bottom: 1rem;
    }

    & img,
    & video {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `)

function query(target) {
  const state = redditById(target.id)

  const r = target.getAttribute('r') || ''
  const { choices=[r] } = $.learn()
  const sort = target.getAttribute('sort') || ''
  const { paginate } = state

  const query = { r: choices.join('+'), sort, paginate }

  request(target, query)

  return state
}

async function request(target, query) {
  const lookup = JSON.stringify(query)

  const { dataset } = target

  if(lookup !== dataset.lookup) {
    target.dataset.lookup = lookup

    const { r, sort = '', paginate = '' } = query
    const url = `https://api.reddit.com/r/${r}/${sort}/.json?count=25${paginate}`

    await fetch(url)
      .then(res => res.json())
      .then(json => json.data)
      .then(response => $.teach({
        ...response,
        loading: false
      }, merge(target.id)))
  }
}

function paginate(key) {
  return ({ target }) => {
    const { id } = target.dataset
    const state = redditById(id)
    const query = key !== 'reset'
      ? `&${key}=${state[key]}`
      : ''

    $.teach({ paginate: query, loading: true }, merge(id))
    document.getElementById(id)
      .querySelector('ol').scrollTop = '0'
  }
}

function merge(id) {
  return function middleware(state, payload) {
    return {
      ...state,
      [id]: {
        ...emptyReddit,
        ...state[id],
        ...payload
      }
    }
  }
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function step(i) {
  return event => {
    const { id } = event.target.dataset
    const { children, position } = redditById(id)

    const index = mod((position + i), children.length)

    $.teach({
      id,
      position: index
    }, merge(id))
  }
}

const eventMap = {
  37: function() { click('.back') },
  38: function() { click('.more') },
  39: function() { click('.next') },
};
function keys(event) {
  const handler = eventMap[event.keyCode] || (()=>console.log(event.keyCode)
  );
  handler();
}

function click(selector) {
  const node = document.querySelector(`${$.selector} ${selector}`)

  node.click()
}

document.addEventListener('keydown', keys);
let lastChoices
(function loop() {
  const { choices } = $controlBox.learn()
  if(lastChoices !== choices) {
    lastChoices = choices
    console.log(choices)
    $.teach({ choices })

  }
  requestAnimationFrame(loop)
})()

