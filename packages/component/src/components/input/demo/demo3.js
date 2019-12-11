import React from 'react'
import { Input, Icon } from '@alicloud/console-components'

const onChange = v => {
  console.log(v)
}

const onBlur = e => {
  console.log(e)
}

const Demo3 = () => (
  <div>
    <Input
      defaultValue="clear by click"
      hasClear
      onChange={onChange}
      onBlur={onBlur}
    />
    <br />
    <br />
    <Input
      defaultValue="clear by click"
      hasClear
      onChange={onChange}
      onBlur={onBlur}
      hint="calendar"
    />
    <br />
    <br />
    <Input
      hasClear
      defaultValue="clear by click"
      size="large"
      aria-label="input with config of hasClear"
      onChange={onChange}
    />
  </div>
)

export default Demo3

export const demoMeta = {
  zhName: '清除按钮',
  zhDesc: `通过设置 hasClear 添加清除按钮.

	hint为水印按钮，和hasClear占用同一个地方配合使用`,
}
