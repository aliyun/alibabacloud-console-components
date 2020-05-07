import React from 'react'
import CopyId from '@alicloud/console-components-copy-id'

const BasicDemo: React.FC<{}> = () => {
  return (
    <div id="app-wrapper">
      <CopyId id="内容" message="复制成功">
        <div>内容</div>
      </CopyId>
    </div>
  )
}

export default BasicDemo
