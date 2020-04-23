/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import type { IDemoInfo } from '../index'
import generateProjectFiles from './generateProjectFiles'

export async function renderCodesandboxDetail(demoInfo: IDemoInfo) {
  const { files, entry } = generateProjectFiles(demoInfo)
  const sandboxId = await createCodesandbox(files)
  const iframeSrc = generateIframeSrc(sandboxId, entry)
  return <SIframe {...iFramePreset} src={iframeSrc} />
}

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

const SIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
`

const iFramePreset = {
  sandbox:
    'allow-modals allow-forms allow-popups allow-scripts allow-same-origin',
}

const generateIframeSrc = (
  sandboxId: string,
  entryPath?: string,
  onlyEditor?: boolean
) => {
  const module = entryPath
    ? `&module=${encodeURIComponent(`/${entryPath}`)}`
    : ''
  const view = onlyEditor ? '&view=editor' : '&view=split'
  return `https://codesandbox.io/embed/${sandboxId}?fontsize=14&codemirror=1${view}${module}`
}
