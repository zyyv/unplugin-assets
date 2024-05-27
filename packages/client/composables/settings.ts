export const Global_Settings = useLocalStorage('settings', {
  status: false,
  bgTransparent: true,
  keyword: '', // search keyword
  iconifyCollect: '',
})

export const Preview_AssetInfo_Status = ref(false)
export const Preview_AssetInfo = ref<AssetInfo | null>(null)
