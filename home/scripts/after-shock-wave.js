import module from '/system/module.js'
import { actionScript } from '/system/utils.js'
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

$.draw((target) => {
  if(!target.ogTextContent) {
    target.ogTextContent = target.textContent
  }

  const { featureActive } = $.learn()

  const metaverse = featureActive ? `
      <SecureRender>${target.ogTextContent}</SecureRender>
    ` : target.ogTextContent

  return `
    <div class="mod-shop">
      <div>
        After Shock, Wave: ${featureActive ? 'secure' : 'insecure' }
      </div>
      <div>
      . . . . .
      </div>
      <div>
        ${metaverse}
      </div>
      <div>
        <button data-action="off" data-script="/scripts/after-shock-wave.js">off</button>
        <button data-action="on" data-script="/scripts/after-shock-wave.js">on</button>
      </div>
    </div>
  `
})

$.flair(`
  & {
    height: 100%;
  }
  & .mod-shop {
    display: grid;
    grid-template-rows: 2rem 2rem 1fr 2rem;
    height: 100%;
  }
`)
