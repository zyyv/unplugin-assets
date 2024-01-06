<script lang='ts' setup>
import { rpc } from '../composables/rpc';

const { assets } = useAssets()

const aessets_image = computed(() => {
  return assets.value.filter((item) => {
    return item.type === 'image'
  })
})

function useAssets() {
  const assets = ref<AssetInfo[]>([])

  getAssets()
  const debounceAssets = useDebounceFn(() => {
    getAssets()
  }, 100)

  async function getAssets() {
    assets.value = await rpc.assets()
  }

  return { assets }
}

</script>

<template>
  <Card :list="aessets_image">
    <template #default="{ item }">
      <ItemImage :path="item.path" />
    </template>
  </Card>
</template>


