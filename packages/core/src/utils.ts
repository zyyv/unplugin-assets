// import launch from 'launch-editor'

export async function openBrowser(address: string) {
  await import('open')
    .then(r => r.default(address, { newInstance: true }))
    .catch(() => { })
}

// TODO: openInEditor
export async function openInEditor(filePath: string): Promise<boolean> {
  const path = `${filePath}:1:0`

  console.log('open filePath', path)

  try {
    await import('launch-editor').then(r => (r.default || r)(path))
    return true
  }
  catch (e) {
    console.error(e)
    return false
  }
}
