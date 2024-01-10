import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { onSuccess } from 'vite-plugin-on-success'

const r = (...args: string[]) => resolve(__dirname, ...args)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/__assets/',
  resolve: {

  },
  build: {
    target: 'esnext',
    outDir: r('../core/dist/client'),
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
      dirs: [
        'src/composables',
      ],
      vueTemplate: true,
    }),
    onSuccess({ command: 'esno scripts/vite-build.ts' })
  ],
})
