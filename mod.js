import { Pup } from "https://deno.land/x/pup/mod.ts"

const configuration = {
  "processes": [
    {
      "id": "sillonious-tag",
      "cmd": ["deno", "task", "start-tag"],
      "autostart": true
    },
    {
      "id": "sillonious-solid",
      "cmd": ["deno", "task", "start-solid"],
      "autostart": true
    },
    {
      "id": "sillonious-braid",
      "cmd": ["deno", "task", "start-braid"],
      "autostart": true
    },
    {
      "id": "sillonious-gun",
      "cmd": ["deno", "task", "start-gun"],
      "autostart": true
    },
    {
      "id": "sillonious-edge",
      "cmd": ["deno", "task", "start-edge"],
      "autostart": true
    }
  ]
}

const pup = await new Pup(configuration /* OPTIONAL: , statusFile */)

// Go!
pup.init()
