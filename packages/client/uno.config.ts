import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
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
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'x-divider': `relative before-(w-40% h-1px absolute top-50% translate-y--50% left-0 bg-#ccc dark-bg-[hsla(0,0%,100%,.1)] content-empty)
    after-(w-40% h-1px absolute top-50% translate-y--50% right-0 bg-#ccc dark-bg-[hsla(0,0%,100%,.1)] content-empty)`,
  },
})
