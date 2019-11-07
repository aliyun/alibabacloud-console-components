async function createCodesandbox(demoInfo: any) {
  const files: { [key: string]: { content: string } } = {}
  if (typeof demoInfo !== 'object' || demoInfo === null) {
    throw new Error(`createCodesandbox: demoInfo is not object`)
  }
  Object.keys(demoInfo).forEach(key => {
    files[key] = {
      content: demoInfo[key],
    }
  })
  return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      files,
    }),
  })
    .then(x => x.json())
    .then(({ sandbox_id }) => sandbox_id)
}

export default createCodesandbox
