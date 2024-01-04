/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMeta {
  DEV: boolean
}

interface ServerFunctions {
  add(a: number, b: number): number
}

interface ClientFunctions {
  alert(message: string): void
}
