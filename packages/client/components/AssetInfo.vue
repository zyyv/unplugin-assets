<script lang='ts' setup>
import { rpc } from '../composables/rpc'

const { asset } = defineProps<{
  asset: AssetInfo
}>()

function getFileSize(size: number) {
  if (size < 1024)
    return `${size} B`
  if (size < 1024 * 1024)
    return `${(size / 1024).toFixed(2)} KB`
  return `${(size / 1024 / 1024).toFixed(2)} MB`
}

const imageMeta = computedAsync(() => {
  if (asset.type !== 'image')
    return undefined
  return rpc.getImageMeta(asset.filePath)
})

async function openInEditor() {
  if (!asset)
    return

  const { protocol, hostname, port } = window.location
  const baseUrl = `${protocol}//${hostname}:${port}`
  fetch(`${baseUrl}/__open-in-editor?file=${encodeURIComponent(`${asset.path}:${1}:${0}`)}`)
}
</script>

<template>
  <div>
    <ul w-full un-children="flex gap-4" space-y-2>
      <li>
        <div class="label">
          FilePath
        </div>
        <div fcc>
          <div class="val" line-clamp-1>
            {{ asset.filePath }}
          </div>
          <div cursor-pointer @click="openInEditor()">
            <i i-carbon-launch />
          </div>
        </div>
      </li>
      <li>
        <div class="label">
          Public Path
        </div>
        <div class="val">
          {{ asset.publicPath }}
        </div>
      </li>
      <li>
        <div class="label">
          Type
        </div>
        <div class="val">
          {{ asset.type }}
        </div>
      </li>
      <li v-if="asset.type === 'image' && imageMeta">
        <div class="label">
          Image Size
        </div>
        <div class="val">
          {{ imageMeta.width }} x {{ imageMeta.height }}
        </div>
      </li>
      <li>
        <div class="label">
          File Size
        </div>
        <div class="val">
          {{ getFileSize(asset.size) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.label {
  --uno: c-#888 op-80 text-right flex-[0_0_100px];
}

.val {
  --uno: line-clamp-1 dark:c-#ccc c-#444 flex-1;
}
</style>
