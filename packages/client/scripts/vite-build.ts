import path from 'node:path'
import fsp from 'node:fs/promises'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

async function fixBuild() {
  const dist = path.resolve(__dirname, '../../core/dist/client')
  const html = path.resolve(dist, 'index.html')
  const content = await fsp.readFile(html, 'utf-8')
  await fsp.writeFile(html, content.replace(/\/__assets/g, './__assets'))
}

fixBuild()
