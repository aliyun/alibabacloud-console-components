import React from 'react'
import { Input } from '@alicloud/console-components'

const Demo12 = () => {
  return (
    <div>
      <Input.TextArea placeholder="TextArea" aria-label="TextArea" rows={4} />
    </div>
  )
}

export default Demo12

export const demoMeta = {
  zhName: '多行文本',
  zhDesc: '使用TextArea设置多行文本输入框',
}
