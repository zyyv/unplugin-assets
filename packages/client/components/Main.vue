<script lang='ts' setup>
import { rpc } from '../composables/rpc'
import { Global_Settings } from '../composables/settings';

const { assets } = useAssets()

function useAssets() {
  const assets = ref<AssetInfo[]>([])

  getAssets()
  // const debounceAssets = useDebounceFn(() => {
  //   getAssets()
  // }, 100)

  async function getAssets() {
    assets.value = await rpc.assets()
  }

  return { assets }
}

const GroupByFolders = computed(() => {
  const result: Record<string, AssetInfo[]> = {}
  for (const asset of assets.value) {
    const folder = `${asset.path.split('/').slice(0, -1).join('/')}/`
    if (!result[folder])
      result[folder] = []
    result[folder].push(asset)
  }
  return Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
})

const filterByGroup = computed(() => {
  return (GroupByFolders.value.map(item => {
    let [folder, assets] = item

    assets = assets.filter((item) => {
      return ['image', 'font'].includes(item.type)
    })

    assets = assets.filter((item) => {
      const name = item.filePath.split('/').pop()!
      return name.toLowerCase().includes(Global_Settings.value.keyword.toLowerCase())
    })

    return [folder, assets]
  }))
    .filter(item => item[1].length)
})
</script>

<template>
  <main py-8 px-12 fccc space-y-4>
    <Panel v-for="group in filterByGroup" :key="group[0]" :title="group[0]" :list="group[1]" />
  </main>
  <Settings />
  <AssetPreview />
</template>
