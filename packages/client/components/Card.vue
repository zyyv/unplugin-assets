<script lang='ts' setup>
const [collapsed, toggleCollapsed] = useToggle(false)
</script>

<template>
  <div w-full b="~ [hsla(0,0%,100%,.1)]" rd-lg of-hidden>
    <!-- Header -->
    <div px-6 py-4 flex items-baseline bg="#333" pr>
      <h2 text="lg #eee">
        Imgaes
      </h2>
      <span ml-2 text-sm>123 items</span>
      <div w-7 h-7 pa right-4 fcc cursor-pointer @click="toggleCollapsed()">
        <i i-carbon-chevron-up trans important-duration-150 :class="collapsed ? 'rotate-180' : ''" />
      </div>
    </div>
    <!-- Content -->
    <div :class="collapsed ? 'max-h-0' : 'max-h-120'" of-scroll trans important-duration-250>
      <div px-6 py-4 flex="~ wrap" gap-6>
        <ItemImage />
      </div>
    </div>
  </div>
</template>
