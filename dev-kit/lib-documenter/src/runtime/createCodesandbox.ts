async function createCodesandbox(demoFiles: {
  [modulesName: string]: string
}): Promise<string> {
  const files: { [key: string]: { content: string } } = {}
  if (typeof demoFiles !== 'object' || demoFiles === null) {
    throw new Error(`createCodesandbox: demoInfo is not object`)
  }
  Object.keys(demoFiles).forEach((key) => {
    files[key] = {
      content: demoFiles[key],
    }
  })
  return (
    fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        files,
      }),
    })
      .then((x) => x.json())
      // eslint-disable-next-line @typescript-eslint/camelcase
      .then(({ sandbox_id }) => sandbox_id)
  )
}

export default createCodesandbox
