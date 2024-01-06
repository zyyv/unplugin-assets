import fs from 'node:fs/promises'
import { basename, dirname, join, relative, resolve } from 'node:path'
import fg from 'fast-glob'
import type { ResolvedConfig } from 'vite'

let cache: AssetInfo[] | null = null

export async function getStaticAssets(config: ResolvedConfig): Promise<AssetInfo[]> {
  if (cache)
    return cache

  const dir = resolve(config.root)
  const baseURL = config.base

  const files = await fg(['**/*'], {
    cwd: dir,
    onlyFiles: true,
    ignore: ['**/node_modules/**', '**/dist/**'],
  })

  cache = await Promise.all(files.map(async (file) => {
    const filePath = resolve(dir, file)
    const stat = await fs.lstat(filePath)
    const publicDirname = relative(config.root, config.publicDir)
    const normalizedPath = publicDirname === basename(dirname(file))
      ? file.replace(publicDirname, '')
      : file
    return {
      path: normalizedPath,
      filePath,
      publicPath: join(baseURL, normalizedPath),
      type: guessType(file),
      size: stat.size,
      mtime: stat.mtimeMs,
    }
  }))

  return cache
}

function guessType(path: string): AssetType {
  if (/\.(png|jpe?g|jxl|gif|svg|webp|avif|ico|bmp|tiff?)$/i.test(path))
    return 'image'
  if (/\.(mp4|webm|ogv|mov|avi|flv|wmv|mpg|mpeg|mkv|3gp|3g2|ts|mts|m2ts|vob|ogm|ogx|rm|rmvb|asf|amv|divx|m4v|svi|viv|f4v|f4p|f4a|f4b)$/i.test(path))
    return 'video'
  if (/\.(mp3|wav|ogg|flac|aac|wma|alac|ape|ac3|dts|tta|opus|amr|aiff|au|mid|midi|ra|rm|wv|weba|dss|spx|vox|tak|dsf|dff|dsd|cda)$/i.test(path))
    return 'audio'
  if (/\.(woff2?|eot|ttf|otf|ttc|pfa|pfb|pfm|afm)/i.test(path))
    return 'font'
  if (/\.(json[5c]?|te?xt|[mc]?[jt]sx?|md[cx]?|markdown)/i.test(path))
    return 'text'
  return 'other'
}
