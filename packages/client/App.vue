<script setup lang="ts">
import { rpc } from './composables/rpc'

const a = ref(0)
const b = ref(0)
const result = ref(0)
const msg = ref('')

async function update() {
  result.value = await rpc.add(a.value, b.value)
}

update()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    client
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>

    <p>
      {{ a }} + {{ b }} = {{ result }}
    </p>

    <button @click="update()">
      update
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
