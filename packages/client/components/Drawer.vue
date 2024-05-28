<script lang='ts' setup>
defineProps<{
  title?: string
}>()

const status = defineModel<boolean>()

function closeModal() {
  status.value = false
}
</script>

<template>
  <div
    h-screen w-40vw pf z-10 top-0 trans :class="status ? 'right-0' : 'right--40vw'" bg="dark:#222 #fff" p-8
    b-l="~ dark:[hsla(0,0%,100%,.1)] #ccc"
  >
    <h2 text="xl" fbc>
      {{ title }}
      <i i-carbon-close cursor-pointer @click="closeModal()" />
    </h2>
    <slot />
  </div>
</template>
