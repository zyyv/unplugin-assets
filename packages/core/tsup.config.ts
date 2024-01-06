import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/*.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  onSuccess: 'pnpm run build:fix && pnpm run --filter ../client dev', 
  shims: true,
  treeshake: true,
  define: {
    'import.meta.DEV': JSON.stringify(!!process.env.DEV),
  },
}
