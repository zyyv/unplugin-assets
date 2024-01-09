import { createRPCClient } from 'vite-dev-rpc'
import { createHotContext } from 'vite-hot-client'

const viteHotCtx = (await createHotContext('/___', `${location.pathname.split('/__assets')[0] || ''}/`.replace(/\/\//g, '/')))!

export const rpc = createRPCClient<ServerFunctions, ClientFunctions>('unplugin-assets', viteHotCtx, {
  alert(message) {
    console.log(message)
  },
})
