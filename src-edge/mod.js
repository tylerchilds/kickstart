import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { Status } from "https://deno.land/std/http/http_status.ts";
import { lookup } from "https://deno.land/x/media_types/mod.ts";

const channels = {};
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
    socket.onerror = handleSocketError.bind(socket, pathname);

    return response;
  } catch(e) {
    console.error(e)
  }
}

function handleSocketOpen(pathname) {
  if(!channels[pathname]) {
    const channel = new BroadcastChannel(pathname)
    socketsByChannel[pathname] = new Set();
    this.onmessage = handleChannelMessage.bind(channel, pathname)
    channel.messageerror = console.error
    channels[pathname] = channel
  }
  socketsByChannel[pathname].add(this)
}

function handleSocketClose(pathname) {
  socketsByChannel[pathname].delete(this)
}

function handleSocketError(pathname, error) {
  handleSocketClose.call(this, pathname)
  handleSocketOpen.call(this, pathname)
  console.log('handledSocketError:', error)
}

function handleSocketMessage(pathname, event) {
  const channel = channels[pathname]
  channel.postMessage(event.data)
}

function handleChannelMessage(pathname, event) {
  (event.target !== this) && this.postMessage(event.data)
  socketsByChannel[pathname].forEach(s => s.send(event.data))
}

serve(router);
console.log("Listening on http://localhost:8000");
