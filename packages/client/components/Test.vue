<script lang='ts' setup>
import { rpc } from '../composables/rpc'

const a = ref(0)
const b = ref(0)
const result = ref(0)

const { assets } = useAssets()


async function update() {
  a.value = Math.floor(Math.random() * 100)
  b.value = Math.floor(Math.random() * 100)

  result.value = await rpc.add(a.value, b.value)
}

update()

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
  <div>
    <p text="red xl">
      {{ a }} + {{ b }} = {{ result }}
    </p>

    <p v-if="assets.length">
      {{ JSON.stringify(assets) }}
    </p>

    <button @click="update()">
      update
    </button>
  </div>
</template>
