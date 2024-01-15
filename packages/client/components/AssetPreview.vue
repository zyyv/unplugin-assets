<script setup lang="ts">
import { rpc } from '../composables/rpc'
import { Preview_AssetInfo, Preview_AssetInfo_Status } from '../composables/settings'

defineProps<{
  textContent?: string
  detail?: boolean
}>()

const asset = ref(Preview_AssetInfo)
</script>

<template>
  <Drawer v-model="Preview_AssetInfo_Status" title="Asset Details">
    <div v-if="asset" fccc of-hidden bg-active object-cover p2 mt-4>
      <template v-if="asset.type === 'image'">
        <AssetImage :path="asset.path" hidden-name />
      </template>
      <AssetFontPreview v-else-if="asset.type === 'font'" :key="asset.publicPath" :asset="asset" p2 text-2xl />
      <div v-else-if="asset.type === 'text' && !textContent" i-carbon-document text-3xl op20 />
      <div v-else-if="asset.type === 'text' && textContent" w-full self-start p4>
        <pre max-h-10rem of-hidden text-xs font-mono v-text="textContent" />
      </div>
      <div v-else-if="asset.type === 'video'">
        <video :src="asset.publicPath" :autoplay="detail" :controls="detail" />
      </div>
      <div v-else-if="asset.type === 'audio'">
        <div v-if="!detail" i-carbon-volume-up text-3xl op20 />
        <audio v-else :src="asset.publicPath" controls />
      </div>
      <div v-else i-carbon-help text-3xl op20 />

      <div my-8 w-full fcc x-divider>
        Details
      </div>

      <AssetInfo :asset="asset" />

      <div my-8 w-full fcc x-divider>
        Actions
      </div>
    </div>
  </Drawer>
</template>
