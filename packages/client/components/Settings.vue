<script lang='ts' setup>
import { Global_Settings } from '../composables/settings'
</script>

<template>
  <Drawer v-model="Global_Settings.status" title="Global Settings">
    <div mt-10>
      <div fbc>
        <span>Background Transparent</span>
        <Switch v-model="Global_Settings.bgTransparent" />
      </div>
    </div>
  </Drawer>
</template>
