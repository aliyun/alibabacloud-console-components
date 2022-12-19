/**
 * @title 尺寸
 * @description TimePicker 使用和 Input 组件相同的输入框尺寸，可以通过 `size` 属性进行设置。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Box direction="row" spacing={20}>
      <TimePicker size="large" />
      <TimePicker />
      <TimePicker size="small" />
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
