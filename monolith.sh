#!/bin/bash

trap killgroup SIGINT

killgroup(){
  echo killing...
  kill 0
}

deno task start-edge &
deno task start-solid &
deno task start-gun &
deno task start-braid &
wait

