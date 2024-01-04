declare type AssetType = 'image' | 'font' | 'video' | 'audio' | 'text' | 'json' | 'other'

declare type AssetInfo = any

// declare interface AssetInfo {
//   path: string
//   type: AssetType
//   publicPath: string
//   filePath: string
//   size: number
//   mtime: number
// }

declare interface ServerFunctions {
  add(a: number, b: number): number
  assets(): Promise<AssetInfo[]>
}

declare interface ClientFunctions {
  alert(message: string): void
}
