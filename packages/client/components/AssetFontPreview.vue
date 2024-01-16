<script setup lang="ts">
import { hash } from 'ohash'

const props = defineProps<{
  asset: AssetInfo
  hiddenName?: boolean
}>()

const id = computed(() => `unplugin-assets-${hash(props.asset)}`)

useStyleTag(computed(() => `
  @font-face {
    font-family: '${id.value}';
    src: url('${props.asset.publicPath}');
  }
`))
</script>

<template>
  <div w-35 p-1 hover="scale-105" trans important-duration-150>
    <div w-full of-hidden p-1 b="~ dark:[hsla(0,0%,100%,.1)] #ccc" rd-sm cursor-pointer>
      <div w-full aspect-square of-hidden text-4xl :style="{ fontFamily: `'${id}'` }">
        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
      </div>
    </div>
    <div v-if="!hiddenName" mt-2 px-1 w-full line-clamp-1 text="center sm dark:#ddd #666">
      {{ asset.path.split('/').pop() }}
    </div>
  </div>
</template>
