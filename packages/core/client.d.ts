declare type AssetType = 'image' | 'font' | 'video' | 'audio' | 'text' | 'json' | 'other'

// declare type AssetInfo = any

declare interface AssetInfo {
  path: string
  type: AssetType
  publicPath: string
  filePath: string
  size: number
  mtime: number
}

declare interface ImageMeta {
  width: number
  height: number
  orientation?: number
  type?: string
  mimeType?: string
}

declare interface ServerFunctions {
  assets: () => Promise<AssetInfo[]>
  getImageMeta: (filepath: string) => Promise<ImageMeta | undefined>
}

declare interface ClientFunctions {
  alert: (message: string) => void
}
