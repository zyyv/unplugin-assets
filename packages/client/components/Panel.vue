<script lang='ts' setup>
import { Preview_AssetInfo, Preview_AssetInfo_Status } from '../composables/settings'

const props = defineProps<{
  title: string
  list: AssetInfo[]
}>()

const images = computed(() => {
  return props.list.filter((item) => {
    return item.type === 'image'
  })
})

const fonts = computed(() => {
  return props.list.filter((item) => {
    return item.type === 'font'
  })
})

function handlePreview(asset: AssetInfo) {
  Preview_AssetInfo_Status.value = true
  Preview_AssetInfo.value = asset
}
</script>

<template>
  <section w-full b="~ dark:[hsla(0,0%,100%,.1)] #eee" rd-lg>
    <!-- Header -->
    <header px-6 py-4 flex items-baseline bg="dark:#333 #eee" ps top-16>
      <h2 text="lg dark:#eee #222">
        <i i-carbon-folder />
        {{ title }}
      </h2>
      <span ml-2 text-sm>{{ list.length }} items</span>
    </header>
    <!-- Content -->
    <main v-if="list.length !== 0" px-6 py-4 flex="~ wrap" gap-6>
      <AssetImage v-for="item in images" :key="item.path" :path="item.path" @click="handlePreview(item)" />
      <AssetFontPreview v-for="item in fonts" :key="item.path" :asset="item" @click="handlePreview(item)" />
    </main>
  </section>
</template>
