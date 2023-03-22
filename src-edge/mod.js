import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";
import { lookup } from "https://deno.land/x/media_types/mod.ts";

const channels = new Map();
const socketsByChannel = {}

async function router(request, context) {
  let { pathname } = new URL(request.url);

  if (request.headers.get("upgrade") === "websocket") {
    return websocket(request);
  }

  let file
  let statusCode = Status.Success
  try {
    file = await Deno.readTextFile(`./dist${pathname}`)
  } catch (e) {
    pathname = './dist/index.html'
    file = await Deno.readTextFile(pathname)
    statusCode = Status.NotFound
    console.error(pathname + '\n' + e)
  }
  return new Response(file, {
    headers: {
      'content-type': lookup(pathname),
    },
    status: statusCode
  })
}

function websocket(request) {
  try {
    const { pathname } = new URL(request.url);
    const { socket, response } = Deno.upgradeWebSocket(request);

    socket.onopen = handleSocketOpen.bind(socket, pathname);
    socket.onmessage = handleSocketMessage.bind(socket, pathname);
    socket.onclose = handleSocketClose.bind(socket, pathname);
    socket.onerror = console.error;

    return response;
  } catch(e) {
    console.error(e)
  }
}

function handleSocketOpen(pathname) {
  if(!channels.has(pathname)) {
    const channel = new BroadcastChannel(pathname)
    socketsByChannel[pathname] = new Set();
    channel.onmessage = handleChannelMessage.bind(channel, pathname)
    channels.set(pathname, channel)
  }
  socketsByChannel[pathname].add(this)
}

function handleSocketClose(pathname) {
  socketsByChannel[pathname].delete(this)
}

function handleSocketMessage(pathname, event) {
  console.log('socket ' + pathname + ': ' + JSON.stringify(event))
  const channel = channels.get(pathname)
  channel.postMessage(event)
}

function handleChannelMessage(pathname, event) {
  console.log('channel ' + pathname + ': ' + event)
  (event.target !== this) && this.postMessage(e.data)
  socketsByChannel[pathname].forEach(s => s.send(e.data))
}

serve(router);
console.log("Listening on http://localhost:8000");
