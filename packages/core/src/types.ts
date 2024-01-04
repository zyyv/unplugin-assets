import type { FilterPattern } from 'vite'

export interface Options {
  /**
   * Priview assets path
   *
   * @default ['public', './src/assets']
   */
  paths?: string | string[]

  /**
   * Rules to include transforming target.
   *
   * @default [/\.[jt]sx?$/, /\.vue\??/]
   */
  include?: FilterPattern

  /**
   * Rules to exclude transforming target.
   *
   * @default [/node_modules/, /\.git/]
   */
  exclude?: FilterPattern
}
