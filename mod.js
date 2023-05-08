import { mergeReadableStreams } from "https://deno.land/std@0.186.0/streams/merge_readable_streams.ts";
import { tgz } from "https://deno.land/x/compress@v0.4.5/mod.ts";
import { ensureDir } from "https://deno.land/std@0.144.0/fs/ensure_dir.ts";

ensureDir(`${Deno.cwd()}/tmp/logs`)

console.log(`Downloading archive...`)
const archive = await fetch('https://github.com/tylerchilds/kickstart/archive/refs/heads/main.tar.gz')
console.log(`Done!`)

console.log(`Saving archive...`)
if (archive.body) {
  const file = await Deno.open(`${Deno.cwd()}/tmp/archive.tar.gz`, { write: true, create: true });
  await archive.body.pipeTo(file.writable);
}
console.log(`Done!`)

console.log(`Extacting archive...`)
await tgz.uncompress(`${Deno.cwd()}/tmp/archive.tar.gz`, `${Deno.cwd()}/tmp`);
console.log(`Done!`)

const log = `${Deno.cwd()}/logs/${new Date().toISOString()}.txt`

const file = await Deno.open(log, {
  read: true,
  write: true,
  create: true,
});

const command = new Deno.Command(Deno.execPath(), {
	cwd: `${Deno.cwd()}/tmp/kickstart-main`,
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

console.log('a log of this sillonious session is available in:\n', log)
joined.pipeTo(file.writable).then(() => console.log("pipe join done"));
