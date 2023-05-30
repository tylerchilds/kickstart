import { Pup } from "https://deno.land/x/pup/mod.ts"

const processConfiguration = {
  notorious: 'sillonious',
  tag: true,
  solid: true,
  braid: true,
  gun: true,
  edge: true,
  features: {
    tag: {
      "id": "sillonious-tag",
      "cmd": ["deno", "task", "start-tag"],
      "autostart": true
    },
    solid: {
      "id": "sillonious-solid",
      "cmd": ["deno", "task", "start-solid"],
      "autostart": true
    },
    braid: {
      "id": "sillonious-braid",
      "cmd": ["deno", "task", "start-braid"],
      "autostart": true
    },
    gun: {
      "id": "sillonious-gun",
      "cmd": ["deno", "task", "start-gun"],
      "autostart": true
    },
    edge: {
      "id": "sillonious-edge",
      "cmd": ["deno", "task", "start-edge"],
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
