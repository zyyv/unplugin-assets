
<img src="https://raw.githubusercontent.com/zyyv/unplugin-assets/main/packages/client/public/logo.svg" style="width:100px;" />

# unplugin-assets [![NPM version](https://img.shields.io/npm/v/unplugin-assets?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-assets)

Preview asset sources in DEV mode.

## Usage

```bash
pnpm add unplugin-assets -D
```

```ts
import { defineConfig } from 'vite'
import Assets from 'unplugin-assets/vite'

export default defineConfig({
  plugins: [
    Assets({
      // ...options
    }),
  ],
})

```

Then you can see the previewed address in your terminal.

> Assets: http://localhost:5173/__assets

## Credits

- [vite-plugin-vue-devtools](https://github.com/webfansplz/vite-plugin-vue-devtools)
- [nuxt/devtools](https://github.com/nuxt/devtools)

## license

[MIT](./LICENSE)
