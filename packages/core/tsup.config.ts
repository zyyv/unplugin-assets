import { defineConfig } from 'tsup'

export default defineConfig(({ env }) => {
  const isDev = env!.NODE_ENV === 'development'

  return {
    entryPoints: [
      'src/*.ts',
    ],
    clean: true,
    format: ['cjs', 'esm'],
    dts: true,
    onSuccess: `pnpm run build:fix ${isDev ? '&& pnpm run --filter ../client dev' : ''}`,
    shims: true,
    treeshake: true,
    define: {
      'import.meta.DEV': JSON.stringify(!!process.env.DEV),
    },
  }
})
