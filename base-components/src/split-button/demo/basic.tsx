/**
 * @title 基本
 * @description 最简单的用法。支持 `Button` 的 `type`, `size`, `component`, `ghost` 等属性透传。
 */

import * as React from 'react'
import styled from 'styled-components'

import { SplitButton, Box } from '@alicloudfe/components'

const { Item } = SplitButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  const content = (
    <Box direction="row" spacing={20}>
      <SplitButton label="Edit Document">{menu}</SplitButton>
      <SplitButton label="Edit Document" type="secondary">
        {menu}
      </SplitButton>
      <SplitButton label="Edit Document" type="primary">
        {menu}
      </SplitButton>
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
