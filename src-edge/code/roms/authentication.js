import module from '../module.js'
import $controlBox from '../control-box.js'

const $ = module('authentication', {
  filter: '',
})

export function on() {
  $.teach({ featureActive: true })
}

export function off() {
  $.teach({ featureActive: false })
}

on()

$.draw(target => {
  const { featureActive } = $.learn()

  if(!featureActive) {
    return `:-|-: feature not yet active :-|-:`
  }

  return `
    <form>
      <fieldset><legend>Authenticate or not, whatever, really.</legend>
        <control-box id="identity-provider" label="Identity Provider" list="/routes/known-hosts.js#providers" limit="1"></control-box>
        <button type="submit">Authenticate</button>
      </fieldset>
    </form>
  `
})

$.when('submit', 'form', event => {
  event.preventDefault()
  const { choices = [] } = $controlBox.learn()
  const [provider] = choices
  alert(provider)
})

function attributes(node, $) {
  const target = node.closest($.link)

  const src = target.getAttribute('src');
  const [resource, path] = src.split('#');

  return {
		root: target,
    options: target.getAttribute('options'),
    label: target.getAttribute('label'),
    placement: target.getAttribute('placement') || '',
    strict: target.getAttribute('strict') === 'true',
    resource,
    path
  }
}

function currentResource(resource) {
  return resource === 'currentUser'
    ? $user.learn()._link
    : resource
}

function toggleActive(event) {
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

