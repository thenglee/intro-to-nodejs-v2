import { readFile } from 'fs/promises'

try {
  const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
} catch (e) {
  //console.error(e) // catch error and log it
  //console.log('hello')

  throw e // throw error, crash, will not continue to next line
  console.log('hello')
}
