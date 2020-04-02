import React from 'react'
import CopyId from '@alicloud/console-components-copy-id'

const WithText: React.FC<{}> = () => {
  return (
    <div id="app-wrapper">
      <CopyId text id="内容" copyText="点击复制">
        <div>内容</div>
      </CopyId>
    </div>
  )
}

export default WithText
