<script lang='ts' setup>
import { codeToHtml } from 'shikiji'
import { Preview_AssetInfo, Global_Settings } from '../composables/settings';
const origin = window.parent.location.origin

const code = computed(() => {
  if (!Preview_AssetInfo.value)
    return ''

  if (Preview_AssetInfo.value.type !== 'image')
    return ''

  const filename = Preview_AssetInfo.value.filePath.split('/').pop()!
  // is not svg
  if (!filename.endsWith('.svg'))
    return ''

  const name = filename.split('.')[0]

  const nameCamel = name.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('')

  return `
import ${nameCamel} from '~icons/${Global_Settings.value.iconifyCollect ? Global_Settings.value.iconifyCollect + '/' : ''}${name}';

<${nameCamel} />
`.trim()
})

const htmlCode = computedAsync(async () => {
  return codeToHtml(code.value, { lang: 'tsx', theme: 'vitesse-dark' })
})

const { copy, copied } = useClipboard()

function handleCopy(value: string) {
  try {
    copy(value)
    // alert('Copied!')
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

const showIconifyUsage = ref(false)
</script>

<template>
  <ul w-full>
    <li fsc gap-2>
      <a b py-1 px-2 rd :href="`${origin}${Preview_AssetInfo?.publicPath}`" download target="_blank">Download</a>
      <button b :class="showIconifyUsage ? 'b-teal c-teal' : ''" py-1 px-2 rd @click="showIconifyUsage = !showIconifyUsage">Iconify Usage</button>
    </li>
    <li mt-4 pr v-if="code && showIconifyUsage">
      <div pa right-4 top-4 cursor-pointer>
        <div v-if="copied" i-carbon-checkmark />
        <div v-else i-carbon-copy @click="handleCopy(code)" />
      </div>
      <div prose v-html="htmlCode"></div>
    </li>
  </ul>
</template>

