import React from 'react'
import { MultiLines } from '@alicloud/console-components-truncate'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const longText = '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。'.repeat(
  10
)

const Demo = () => {
  return (
    <FakeBrowser>
      <MultiLines lines={2} ellipsis={<span>...</span>}>
        {longText}
      </MultiLines>
    </FakeBrowser>
  )
}

export default Demo
