import { readFile, writeFile } from 'fs/promises'

let template = await readFile(
  new URL('template.html', import.meta.url),
  'utf-8'
) // absolute path of file, encoding (turn it into string)

const data = {
  title: 'Learn Node.js',
  body: 'This is the final HTML'
}

for (const [k, v] of Object.entries(data)) {
  // array of key, value pairs
  template = template.replace(`{${k}}`, v)
}

await writeFile(new URL('index.html', import.meta.url), template)
