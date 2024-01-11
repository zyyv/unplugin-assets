<script lang='ts' setup>
const model = defineModel<boolean>()

function toggleModel() {
  model.value = !model.value
}
</script>

<template>
  <div w-12 h-6 b trans important-duration-250 :class="model ? 'b-green/30' : 'b-[hsla(0,0%,100%,.1)]'" rd-full p-1px cursor-pointer pr
    @click="toggleModel">
    <div pa h="[calc(100%-2px)]" :class="[model ? 'left-25px bg-green/80' : 'left-1px bg-#555']" trans
      important-duration-250 aspect-square rd-full></div>
  </div>
</template>


