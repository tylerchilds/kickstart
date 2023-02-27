import { focusTrap } from '/system/deps.js'
import module from '/system/module.js'

const $ = module('control-box', {
  filter: ''
})

export function on() {
  $.teach({ featureActive: true })
}

export function off() {
  $.teach({ featureActive: false })
}

export default $

on()

$.when('click', '.item', function update(event) {
  event.preventDefault();
  const { id } = event.target.dataset
  const args = attributes(event.target, $)

  const { choices = [] } = $.learn()

  if(args.limit === "1") {
    $.teach({ choices: [id] })
  } else {
    $.teach({ choices: [...choices, id] })
  }

  args.root.trap.deactivate();
})

$.when('click', '.bar', toggleActive);
$.when('keyup', '[name="filter"]', setFilter);

function load(target, args) {
  target.ready = true
  fetch(args.resource)
    .then(res => res.json())
    .then(body => body[args.path])
    .then(options => $.teach({ options }))
}

$.draw(target => {
  const { featureActive } = $.learn()

  if(!featureActive) {
    return `:-|-: feature not yet active :-|-:`
  }

  const args = attributes(target, $)

  if(!target.ready) load(target, args)

	if(!target.trap) {
		target.trap = focusTrap.createFocusTrap(target, {
			onActivate: onActivate(target),
			onDeactivate: onDeactivate(target),
			clickOutsideDeactivates: true
		});
	}
  const { filter, choices = [], options = [] } = $.learn()

  if(options !== target.lastOptions) setList(target, $)
  if(filter !== target.lastFilter) filterList(target, $)
  if(choices !== target.lastChoices) updateChoices(target, $)
})

function updateChoices(node, $) {
  const { choices = [] } = $.learn()
  const args = attributes(node, $)
  node.querySelector('.bar').innerHTML = bar(args.label, choices)
}

function bar(label, choices) {
  return `${label ? label : ''} ${choices.map(x => x).join(', ')}`
}

function setList(node, $) {
  const { filter, choices = [], options = [] } = $.learn()
  const args = attributes(node, $)

  const list = options
    .map(x => `
      <button class="item" data-id="${x}">
        ${x}
      </button>
    `).join('')

  const maybeCustomOption = args.strict ? '' : `
    <button class="item custom" data-id="${filter}">
      ${filter}
    </button>
  `

  node.innerHTML = `
    <button class="bar">
      ${bar(args.label, choices)}
    </button>

    <div class="filterable-list ${args.placement}">
      <div class="filter-area">
        <input type="text" name="filter" placeholder="Search" value="${filter}" />
      </div>
      <div class="list">
        ${list}
        ${maybeCustomOption}
      </div>
    </div>
  `

  node.lastOptions = options
}
function filterList(node, $) {
  const { filter} = $.learn();

  const custom = node.querySelector('.item.custom')
  if(custom) {
    custom.dataset.id = filter
    custom.innerHTML = filter
  }

  [...node.querySelectorAll('.item')]
    .forEach(x => {
      const matches = x.dataset.id.toLowerCase().indexOf(filter.toLowerCase()) > -1
      x.style.display = matches ? 'block' : 'none'
    })

}

function attributes(node, $) {
  const target = node.closest($.selector)

  const list = target.getAttribute('list');
  const [resource, path] = list.split('#');

  return {
		root: target,
    options: target.getAttribute('options'),
    label: target.getAttribute('label'),
    limit: target.getAttribute('limit'),
    placement: target.getAttribute('placement') || '',
    strict: target.getAttribute('strict') === 'true',
    resource,
    path
  }
}

function toggleActive(event) {
  event.preventDefault()
  const args = attributes(event.target, $)

	if(isActive(args.root)) {
		args.root.trap.deactivate();
	} else {
		args.root.trap.activate();
	}
}


function setFilter(event) {
	const { value } = event.target
	$.teach({ filter: value })
}

function onActivate(target){
  return () => {
    target.classList.add('is-active')
    target.querySelector('[name="filter"]').focus()
  }
}

function onDeactivate(target) {
  return () => {
    target.classList.remove('is-active')
		$.teach({ filter: '' })
  }
}

function isActive(target) {
  return target.matches('.is-active')
}

$.flair(`
	& {
		display: block;
		position: relative;
		z-index: 3;
    width: 100%;
	}

	& .filter-area {
    margin: .5rem;
	}

	& .bar {
		white-space: nowrap;
		background: rgba(255,255,255,.85);
    width: 100%;
	}

	&.is-active .bar {
	}
	& .bar:hover,
	& .bar:focus {
	}

	& [name="filter"] {
		background: white;
		border: none;
		width: 100%;
    display: block;
	}

	& .filterable-list {
    background: white;
		display: none;
		position: absolute;
    width: 100%;
	}

	&.is-active .filterable-list {
		display: flex;
    flex-direction: column;
	}

  & .filterable-list.above {
    top: 0;
    transform: translateY(-100%);
    flex-direction: column-reverse;
  }

	& .item {
		background: transparent;
		border: none;
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		min-height: 40px;
		margin: 0;
		text-align: left;
		width: 100%;
	}

	& .item * {
		pointer-events: none;
	}

	& .list {
		max-height: 80vh;
		overflow-y: auto;
	}

	& .item:hover,
	& .item:focus {
		background: linear-gradient(rgba(0,0,0,0) 75%, rgba(0,0,0,.25));
	}
`)

