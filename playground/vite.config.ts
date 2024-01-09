import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Assets from 'unplugin-assets/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
    Inspect({
      silent: true,
    }),
    Assets({
      open: true,
    }),
  ],
})
