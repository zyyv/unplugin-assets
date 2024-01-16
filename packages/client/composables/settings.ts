export const Global_Settings = ref({
  status: false,
  bgTransparent: true,
  keyword: '', // search keyword
})

export const Preview_AssetInfo_Status = ref(false)
export const Preview_AssetInfo = ref<AssetInfo | null>(null)

watchEffect(() => {
  console.log(Preview_AssetInfo_Status.value, Preview_AssetInfo.value)
})
