import type { Options } from 'tsup'

export default <Options>{
  entryPoints: [
    'src/*.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  onSuccess: 'npm run build:fix',
  shims: true,
  treeshake: true,
  define: {
    'import.meta.DEV': JSON.stringify(!!process.env.DEV),
  },
}
