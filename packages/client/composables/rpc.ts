import { createRPCClient } from 'vite-dev-rpc'
import type { ClientFunctions, ServerFunctions } from '../types'

console.log(import.meta.hot)

export const rpc = createRPCClient<ServerFunctions, ClientFunctions>('demo', import.meta.hot!, {
  alert(message) {
    console.log(message)
  },
})
