import module from '/system/module.js'
import { actionScript } from '/system/utils.js'
import devices from '/system/devices.js'
import '/system/SecureRender.js'

const $ = module('AfterShockWave', {
  featureActive: false,
  mods: [],
  slots: []
})

actionScript($)

export function on() {
  $.teach({ featureActive: true })
}

export function off() {
  $.teach({ featureActive: false })
}

requestAnimationFrame(function loop(time) {
	console.log('devices: ', devices().length)
  requestAnimationFrame(loop)
})


$.draw((target) => {
  if(!target.ogTextContent) {
    target.ogTextContent = target.textContent
  }

  const { featureActive } = $.learn()

  const metaverse = featureActive ? `
      <SecureRender>${target.ogTextContent}</SecureRender>
    ` : target.ogTextContent

  return `
    <display>
      <div>
        After Shock, Wave: ${featureActive ? 'secure' : 'insecure' }
      </div>
      <debug-devices></debug-devices>
      <div>
        ${metaverse}
      </div>
      <div>
        <button data-action="off" data-script="/scripts/after-shock-wave.js">off</button>
        <button data-action="on" data-script="/scripts/after-shock-wave.js">on</button>
      </div>
    </display>
  `
})

$.flair(`
  & {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
  }
  & display {
    aspect-ratio: 1/1;
    display: grid;
    grid-template-rows: 2rem auto 1fr 2rem;
    height: 100vmin;
    width: 100vmin;
  }
`)
