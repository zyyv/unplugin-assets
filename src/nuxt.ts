import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import vite from './vite'
import type { Options } from './types'
import '@nuxt/schema'

export interface ModuleOptions extends Options {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'unplugin-assets',
    configKey: 'unplugin-assets',
  },
  defaults: {
    // ...default options
  },
  setup(options, nuxt) {
    addVitePlugin(() => vite(options))
  },
})
