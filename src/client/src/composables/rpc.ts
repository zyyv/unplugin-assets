import { createRPCClient } from "vite-dev-rpc"

console.log(import.meta.hot);


export const rpc = createRPCClient<ServerFunctions, ClientFunctions>('demo', import.meta.hot!, {
  alert(message) {
    console.log(message);
  },
})
