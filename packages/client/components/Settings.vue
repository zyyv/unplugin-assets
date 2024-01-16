<script lang='ts' setup>
import { Global_Settings } from '../composables/settings'
</script>

<template>
  <Drawer v-model="Global_Settings.status" title="Global Settings">
    <div mt-10 space-y-4>
      <div fbc>
        <span>Background Transparent</span>
        <Switch v-model="Global_Settings.bgTransparent" />
      </div>
      <div fbc>
        <span>Iconify collect</span>
        <input v-model="Global_Settings.iconifyCollect" trans dark="bg-#333" bg="#eee" focus:ring-red outline-none px-3
          pr-8 h-9 lh-9 text-sm rd-xl w-60 text="#222 dark:#eee" placeholder="Custom collection..." type="text">
      </div>
    </div>
  </Drawer>
</template>
