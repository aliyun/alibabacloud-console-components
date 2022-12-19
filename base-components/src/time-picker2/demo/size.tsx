/**
 * @title 尺寸
 * @description TimePicker2 使用和 Input 组件相同的输入框尺寸，可以通过 `size` 属性进行设置。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker2 } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <TimePicker2 size="large" />
      &nbsp;&nbsp;
      <TimePicker2 />
      &nbsp;&nbsp;
      <TimePicker2 size="small" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
