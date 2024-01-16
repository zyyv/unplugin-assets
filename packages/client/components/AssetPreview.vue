<script setup lang="ts">
import { Preview_AssetInfo, Preview_AssetInfo_Status } from '../composables/settings'

defineProps<{
  textContent?: string
  detail?: boolean
}>()
</script>

<template>
  <Drawer v-model="Preview_AssetInfo_Status" title="Asset Details">
    <div v-if="Preview_AssetInfo" fccc of-hidden bg-active object-cover p2 mt-4>
      <template v-if="Preview_AssetInfo.type === 'image'">
        <AssetImage :path="Preview_AssetInfo.path" hidden-name />
      </template>
      <AssetFontPreview hidden-name v-else-if="Preview_AssetInfo.type === 'font'" :key="Preview_AssetInfo.publicPath" :asset="Preview_AssetInfo" p2 text-2xl />
      <div v-else-if="Preview_AssetInfo.type === 'text' && !textContent" i-carbon-document text-3xl op20 />
      <div v-else-if="Preview_AssetInfo.type === 'text' && textContent" w-full self-start p4>
        <pre max-h-10rem of-hidden text-xs font-mono v-text="textContent" />
      </div>
      <div v-else-if="Preview_AssetInfo.type === 'video'">
        <video :src="Preview_AssetInfo.publicPath" :autoplay="detail" :controls="detail" />
      </div>
      <div v-else-if="Preview_AssetInfo.type === 'audio'">
        <div v-if="!detail" i-carbon-volume-up text-3xl op20 />
        <audio v-else :src="Preview_AssetInfo.publicPath" controls />
      </div>
      <div v-else i-carbon-help text-3xl op20 />

      <div my-8 w-full fcc x-divider>
        Details
      </div>

      <AssetInfo :asset="Preview_AssetInfo" />

      <div my-8 w-full fcc x-divider>
        Actions
      </div>

      <AssetActions :asset="Preview_AssetInfo" />
    </div>
  </Drawer>
</template>
