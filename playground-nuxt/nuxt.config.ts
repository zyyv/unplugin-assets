import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // resolve(__dirname, '../src/nuxt.ts')
    'unplugin-assets/nuxt'
  ]
})
