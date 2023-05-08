import { mergeReadableStreams } from "https://deno.land/std@0.186.0/streams/merge_readable_streams.ts";
import { ensureDir } from "https://deno.land/std@0.144.0/fs/ensure_dir.ts";

ensureDir(`${Deno.cwd()}/tmp/logs`)
const log = `${Deno.cwd()}/tmp/logs/${new Date().toISOString()}.txt`

console.log('a log of this sillonious session is available in:\n', log)
const file = await Deno.open(log, {
  read: true,
  write: true,
  create: true,
});

const command = new Deno.Command(Deno.execPath(), {
	stdout: "piped",
  stderr: "piped",
  args: [
    "task",
    "start",
  ],
});

// create subprocess and collect output
const process = await command.spawn();

const joined = mergeReadableStreams(
  process.stdout,
  process.stderr,
);

joined.pipeTo(file.writable).then(() => console.log("pipe join done"));
