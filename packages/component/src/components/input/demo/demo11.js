import React from 'react'
import { Input } from '@alicloud/console-components'

const handleChange = v => {
  console.log(v)
}
const handleKeyDown = v => {
  console.log(v)
}

const Demo11 = () => {
  return (
    <div>
      <Input
        size="large"
        placeholder="please input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label="this is input"
      />
    </div>
  )
}

export default Demo11

export const demoMeta = {
  zhName: '无障碍',
  zhDesc:
    '通过`aria-label`对`Input`组件进行描述。关于键盘操作请参考`ARIA and KeyBoard`。',
}
