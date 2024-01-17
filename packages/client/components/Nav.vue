<script lang="ts" setup>
import { Global_Settings } from '../composables/settings'

function toggleSetting() {
  Global_Settings.value.status = !Global_Settings.value.status
}
</script>

<template>
  <header px-8 pl-4 fbc b-b="~ dark:#333 #eee">
    <div fcc gap-2 cursor-pointer>
      <img src="/logo.svg" alt="" srcset="">
      <span>Unplugin Assets</span>
    </div>
    <nav fcc gap-5 h-16 text-lg>
      <Serach />
      <i i-carbon-settings cursor-pointer @click="toggleSetting()" />
      <i i-carbon-barrier op-30 />
      <a title="Github" href="https://github.com/zyyv" target="_blank" i-carbon-logo-github />
      <DrakToggle />
    </nav>
  </header>
</template>
