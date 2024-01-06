<script lang='ts' setup>
defineProps<{
  list: AssetInfo[]
}>()

const [collapsed, toggleCollapsed] = useToggle(false)
</script>

<template>
  <div w-full b="~ [hsla(0,0%,100%,.1)]" rd-lg of-hidden>
    <!-- Header -->
    <div px-6 py-4 flex items-baseline bg="#333" pr>
      <h2 text="lg #eee">
        Imgaes
      </h2>
      <span ml-2 text-sm>{{ list.length }} items</span>
      <div w-7 h-7 pa right-4 fcc cursor-pointer @click="toggleCollapsed()">
        <i i-carbon-chevron-up trans important-duration-150 :class="collapsed ? 'rotate-180' : ''" />
      </div>
    </div>
    <!-- Content -->
    <div :class="collapsed ? 'max-h-0' : 'max-h-120'" of-scroll trans important-duration-250>
      <div v-if="list.length !== 0" px-6 py-4 flex="~ wrap" gap-6>
        <slot v-for="item in list" :key="item.path" :item="item" />
      </div>
    </div>
  </div>
</template>
