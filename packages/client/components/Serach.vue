<script lang='ts' setup>
const keyword = ref('')

function handleSearch() {
  console.log(keyword.value)
}
</script>

<template>
  <div>
    <input
      v-model="keyword" trans dark="bg-#333" bg="#eee" focus:ring-red outline-none px-3 h-9 lh-9 text-sm rd-xl w-60
      text="#222 dark:#eee" placeholder="Search..." type="text" @keyup.enter="handleSearch"
    >
  </div>
</template>
