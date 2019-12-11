import React from 'react'
import { Input } from '@alicloud/console-components'

const onChange = v => {
  console.log(v)
}

const Demo1 = () => (
  <div>
    <p>
      <Input placeholder="Basic usage" />
      <br />
      <br />
      <Input.TextArea placeholder="TextArea" />
    </p>
    <h6>尺寸</h6>
    <Input size="large" placeholder="Large" onChange={onChange} />
    <br />
    <br />
    <Input placeholder="Medium" />
    <br />
    <br />
    <Input placeholder="Small" size="small" />
  </div>
)

export default Demo1

export const demoMeta = {
  zhName: '基本',
  zhDesc: '通过 size 属性设置输入框的大小，对单行输入框有效。',
}
