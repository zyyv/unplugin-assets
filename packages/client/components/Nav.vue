<script lang="ts" setup>
const routes = reactive<{ icon?: string, path: string, text?: string }[]>([
  // { path: '/posts', text: 'Blog' },
  { path: '/projects', text: 'Projects' },
  // { path: '/talks', text: 'Talks' },
])

</script>

<template>
  <header inset-x-0 trans fcc px-8 pl-4>
    <nav w-full fbc>
      <div grid="~ gap-5" auto-flow-col items-center h-16>
        <div>
          Unplugin Assets
        </div>
        <a title="Github" href="https://github.com/zyyv" target="_blank" i-mdi-github-box />
        <div fcc>
          <DrakToggle />
        </div>
      </div>
    </nav>
  </header>
</template>
