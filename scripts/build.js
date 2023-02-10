import { emit } from 'https://deno.land/x/emit/mod.ts'

const url = new URL('./home/system/main.js', import.meta.url)
const result = await emit(url)

const code = result[url.href]
console.log(code)
