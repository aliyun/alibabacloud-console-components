/**
 * @title 清除按钮
 * @description 通过设置 hasClear 添加清除按钮.
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

const onChange = (value) => {
  console.log(value)
}
const onBlur = (e) => {
  console.log(e)
}

export default function DemoComponent() {
  const content = (
    <div>
      <Input
        hasClear
        defaultValue="clear by click"
        size="small"
        aria-label="input with config of hasClear"
        onChange={onChange}
      />
      <br />
      <br />

      <Input
        hasClear
        defaultValue="2019-09-10 10:10:20"
        aria-label="input with config of hasClear"
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
      <br />
      <br />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
