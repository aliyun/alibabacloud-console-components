/**
 * @title 不同尺寸
 * @description 通过 `size` 属性可以改变 Input 组件的尺寸，默认为 `medium`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Box direction="row" spacing={20}>
      <DatePicker size="large" />
      <DatePicker />
      <DatePicker size="small" />
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
