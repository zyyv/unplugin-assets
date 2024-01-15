import { resolve } from 'node:path'
import { createUnplugin } from 'unplugin'
import type { UnpluginFactory } from 'unplugin'
import sirv from 'sirv'
import c from 'picocolors'

import { createRPCServer } from 'vite-dev-rpc'
import type { ViteDevServer } from 'vite'
import type { Options } from './types'
import { getImageMeta, getStaticAssets } from './server/assets'
import { openBrowser } from './utils'

const isCI = !!process.env.CI

function rpcServer(server: ViteDevServer) {
  const rpc = createRPCServer<ClientFunctions, ServerFunctions>('unplugin-assets', server.ws, {
    assets: () => getStaticAssets(server.config),
    getImageMeta,
  })

  return rpc
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
  const {
    open = false,
    silent = false,
  } = options

  return {
    name: 'unplugin-assets',
    transformInclude(id) {
      return id.endsWith('main.ts')
    },
    transform(code) {
      return code.replace('__UNPLUGIN__', `Hello Unplugin!`)
    },
    vite: {
      async configureServer(server) {
        const config = server.config
        const base = (config.base) || '/'

        server.middlewares.use(
          `${base}__assets`,
          sirv(resolve(__dirname, '../dist/client'), {
            single: true,
            dev: true,
          }),
        )

        rpcServer(server)

        const _print = server.printUrls
        server.printUrls = () => {
          let host = `${config.server.https ? 'https' : 'http'}://localhost:${config.server.port || '80'}`

          const url = server.resolvedUrls?.local[0]

          if (url) {
            try {
              const u = new URL(url)
              host = `${u.protocol}//${u.host}`
            }
            catch (error) {
              console.warn('Parse resolved url failed:', error)
            }
          }

          _print()

          if (!silent) {
            const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
            console.log(`  ${c.green('➜')}  ${c.bold('Assets')}: ${colorUrl(`${host}${base}__assets`)}`)
          }

          if (open && !isCI) {
            // a delay is added to ensure the app page is opened first
            setTimeout(() => {
              openBrowser(`${host}${base}__assets`)
            }, 500)
          }
        }

        // server.watcher.on('all', (event, path) => {
        //   rpc.onFileWatch({ event, path })
        // })
      },
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
