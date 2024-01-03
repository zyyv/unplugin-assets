import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { resolve } from 'node:path'
import sirv from 'sirv'
import getPort from 'get-port'
import Debug from 'debug'

const DEV_SERVER_PATH = '/__assets'

const debug = {
  log: Debug('unplguin:assets:log'),
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = options => ({
  name: 'unplugin-assets',
  transformInclude(id) {
    return id.endsWith('main.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello Unplugin!`)
  },
  vite:{
    async configureServer(server) {
      const base = (server.config.base) || '/'
      const route = `${base}__assets`

      if (import.meta.DEV) {
        const { createServer } = await import('vite')
        const subServer = await createServer({
          root: resolve(__dirname, './client'),
          server: {
            hmr: {
              port: await getPort(),
            },
            middlewareMode: true,
          },
        })
        server.middlewares.use(route, subServer.middlewares)
      } else {
        server.middlewares.use(
          route,
          sirv(resolve(__dirname, '../dist/client'), {
            single: true,
            dev: true,
          }),
        )
      }
    },
  }
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
