<script lang='ts' setup>
import { Global_Settings } from '../composables/settings'

function clearSearch() {
  Global_Settings.value.keyword = ''
}
</script>

<template>
  <div pr>
    <input
      v-model="Global_Settings.keyword" trans dark="bg-#333" bg="#eee" focus:ring-red outline-none px-3 pr-8 h-9 lh-9
      text-sm rd-xl w-60 text="#222 dark:#eee" placeholder="Search..." type="text"
    >
    <i v-show="Global_Settings.keyword" text-sm pa right-2 class="top-1/2 translate-y--1/2" cursor-pointer i-carbon-close-filled @click="clearSearch()" />
  </div>
</template>
