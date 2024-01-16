import type { FilterPattern } from 'vite'

export interface Options {
  /**
   * Rules to include transforming target.
   */
  include?: string[]

  /**
   * Rules to exclude transforming target.
   */
  exclude?: string[]

  /**
   * Automatically open assets page
   *
   * @default false
   */
  open?: boolean

  /**
   * Print URL output silently in the terminal
   *
   * @default false
   */
  silent?: boolean
}
