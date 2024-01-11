<script lang='ts' setup>
import { Global_Settings } from '../composables/settings'

function closeModal() {
  Global_Settings.value.status = false
}
</script>

<template>
  <div h-screen w-40vw pf z-1 top-0 trans :class="Global_Settings.status ? 'right-0' : 'right--40vw'" backdrop-blur p-8
    b-l="~ [hsla(0,0%,100%,.1)]">
    <h2 text="xl" fbc>
      Global Settings
      <i i-carbon-close cursor-pointer @click="closeModal()"></i>
    </h2>
    <div mt-10>
      <div fbc>
        <span>Background Transparent</span>
        <Switch v-model="Global_Settings.bgTransparent" />
      </div>
    </div>
  </div>
</template>

