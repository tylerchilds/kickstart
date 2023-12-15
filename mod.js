import { Pup } from "https://deno.land/x/pup/mod.ts"

const processConfiguration = {
  notorious: 'sillonious',
  caddy: false,
  tag: false,
  solid: true,
  statebus: true,
  gun: true,
  rust9p: false,
  plan98: false,
  owncast: false,
  dropserver: false,
  llamafile: false,
  saas: false,
  features: {
    caddy: {
      "id": "sillonious-caddy",
      "cmd": "deno task start-caddy",
      "autostart": true
    },
    tag: {
      "id": "sillonious-tag",
      "cmd": "deno task start-tag",
      "autostart": true
    },
    solid: {
      "id": "sillonious-solid",
      "cmd": "deno task start-solid",
      "autostart": true
    },
    statebus: {
      "id": "sillonious-statebus",
      "cmd": "deno task start-statebus",
      "autostart": true
    },
    gun: {
      "id": "sillonious-gun",
      "cmd": "deno task start-gun",
      "autostart": true
    },
    rust9p: {
      "id": "sillonious-rust9p",
      "cmd": "deno task start-rust9p",
      "autostart": true
    },
    plan98: {
      "id": "sillonious-plan98",
      "cmd": "deno task start-plan98",
      "autostart": true
    },
    owncast: {
      "id": "sillonious-owncast",
      "cmd": "deno task start-owncast",
      "autostart": true
    },
    dropserver: {
      "id": "sillonious-dropserver",
      "cmd": "deno task start-owncast",
      "autostart": true
    },
    llamafile: {
      "id": "sillonious-llamafile",
      "cmd": "deno task start-llamafile",
      "autostart": true
    },
    saas: {
      "id": "sillonious-saas",
      "cmd": "deno task start-saas",
      "autostart": true
    },

  }
}


const activeFeatures = Object.keys(processConfiguration)
  .filter(x => processConfiguration[x] === true)
  .map(x => processConfiguration.features[x])

console.log(activeFeatures)

const pup = await new Pup({
  "processes": activeFeatures
})

// Go!
pup.init()
