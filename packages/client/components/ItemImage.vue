<script lang='ts' setup>
const { path } = defineProps<{
  path: string
}>()

const name = computed(() => {
  return path.split('/').pop()
})
</script>

<template>
  <div w-35 p-1 hover="scale-105" trans important-duration-150>
    <div w-full of-hidden p-1 b="~ [hsla(0,0%,100%,.1)]" rd-sm cursor-pointer>
      <div class="bg-img-transparent">
        <img w-full :src="path" :alt="name">
      </div>
    </div>
    <div mt-2 px-1 w-full line-clamp-2 text="center sm #ddd">
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
