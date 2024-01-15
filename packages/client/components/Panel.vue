<script lang='ts' setup>
import { Preview_AssetInfo, Preview_AssetInfo_Status } from '../composables/settings'

const props = defineProps<{
  title: string
  list: AssetInfo[]
}>()

const [collapsed, toggleCollapsed] = useToggle(false)

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
  <div w-full b="~ dark:[hsla(0,0%,100%,.1)] #ccc" rd-lg of-hidden>
    <!-- Header -->
    <div px-6 py-4 flex items-baseline bg="dark:#333 #ccc" pr>
      <h2 text="lg dark:#eee #222">
        {{ title }}
      </h2>
      <span ml-2 text-sm>{{ list.length }} items</span>
      <div w-7 h-7 pa right-4 fcc cursor-pointer @click="toggleCollapsed()">
        <i i-carbon-chevron-up trans important-duration-150 :class="collapsed ? 'rotate-180' : ''" />
      </div>
    </div>
    <!-- Content -->
    <div :class="collapsed ? 'max-h-0' : 'max-h-120'" of-scroll trans important-duration-250>
      <div v-if="list.length !== 0" px-6 py-4 flex="~ wrap" gap-6>
        <AssetImage v-for="item in images" :key="item.path" :path="item.path" @click="handlePreview(item)" />
        <AssetFontPreview v-for="item in fonts" :key="item.path" :asset="item" @click="handlePreview(item)" />
      </div>
    </div>
  </div>
</template>
