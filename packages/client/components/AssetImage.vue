<script lang='ts' setup>
import { Global_Settings } from '../composables/settings'

const { path } = defineProps<{
  path: string
  hiddenName?: boolean
}>()

const name = computed(() => {
  return path.split('/').pop()
})
</script>

<template>
  <div w-35 p-1 hover="scale-105" trans important-duration-150>
    <div w-full of-hidden p-1 b="~ dark:[hsla(0,0%,100%,.1)] #ccc" rd-sm cursor-pointer>
      <div :class="{ 'bg-img-transparent': Global_Settings.bgTransparent }">
        <img w-full :src="path" :alt="name">
      </div>
    </div>
    <div v-if="!hiddenName" mt-2 px-1 w-full line-clamp-1 text="center sm dark:#ddd #666">
      {{ name }}
    </div>
  </div>
</template>

<style scoped>
.bg-img-transparent {
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  background-image: linear-gradient(45deg, #eee 25%, transparent 0, transparent 75%, #eee 0, #eee), linear-gradient(45deg, #eee 25%, #fff 0, #fff 75%, #eee 0, #eee);
}

.dark .bg-img-transparent {
  background-image: linear-gradient(45deg, #1e1e1e 25%, transparent 0, transparent 75%, #1e1e1e 0, #1e1e1e), linear-gradient(45deg, #1e1e1e 25%, #3e3e3e 0, #3e3e3e 75%, #1e1e1e 0, #1e1e1e);
}
</style>
