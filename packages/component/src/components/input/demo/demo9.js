import React from 'react'
import { Input } from '@alicloud/console-components'

const Demo9 = () => {
  return (
    <div>
      <Input.TextArea
        autoHeight
        trim
        aria-label="auto height"
        placeholder="autoHeight"
        onKeyDown={(e, opts) => {
          console.log('onKeyDown', opts)
        }}
      />
      <br />
      <br />
      <Input.TextArea
        aria-label="auto height"
        autoHeight={{ minRows: 2, maxRows: 6 }}
      />
    </div>
  )
}

export default Demo9

export const demoMeta = {
  zhName: '自动高度',
  zhDesc: '设置 `Input` 为 多行文本域；',
}
