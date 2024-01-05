import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  theme: {
    fontFamily: {
      graphik: 'Graphik',
    },
  },
  presets: [
    presetUseful({
      icons: {
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'text-bottom',
        },
      },
    }),
  ],
})
