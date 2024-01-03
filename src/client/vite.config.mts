import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'node:path'

const r = (...args: string[]) => resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/__assets',
  build: {
    target: 'esnext',
    outDir: r('../../dist/client'),
    minify: false,
    emptyOutDir: true,
  },
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      dirs: 'components',
      dts: 'components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts',
    }),
  ],
})
