import { Pup } from "https://deno.land/x/pup/mod.ts"

const processConfiguration = {
  notorious: 'sillonious',
  caddy: false,
  tag: false,
  solid: false,
  statebus: true,
  gun: true,
  edge: false,
  owncast: true,
  dropserver: false,
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
    edge: {
      "id": "sillonious-edge",
      "cmd": "deno task start-edge",
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
    }

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
