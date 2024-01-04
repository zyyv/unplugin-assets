import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { resolve } from 'node:path'
import sirv from 'sirv'
import Debug from 'debug'
import { createRPCServer } from 'vite-dev-rpc'

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
      server.middlewares.use(
        `${base}__assets`,
        sirv(resolve(__dirname, '../dist/client'), {
          single: true,
          dev: true,
        }),
      )
      
      const rpc = createRPCServer<ClientFunctions, ServerFunctions>('demo', server.ws, {
        add(a, b) {
          // eslint-disable-next-line no-console
          console.log(`RPC ${a} ADD ${b}`)
          const result = a + b
          if (result > 150) {
            setTimeout(() => {
              rpc.alert.asEvent(`Someone got ${result}!`)
            }, 50)
          }
          return result
        },
      })

      // server.watcher.on('all', (event, path) => {
      //   rpc.onFileWatch({ event, path })
      // })
    },
  }
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
