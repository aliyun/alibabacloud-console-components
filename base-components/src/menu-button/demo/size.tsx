/**
 * @title 尺寸
 * @description 可以通过 size 属性改变按钮大小。
 */

import * as React from 'react'
import styled from 'styled-components'

import { MenuButton, Box } from '@alicloudfe/components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  const content = (
    <Box direction="row" spacing={20}>
      <MenuButton label="Edit Document" size="small" type="secondary">
        {menu}
      </MenuButton>
      <MenuButton label="Edit Document" size="medium" type="secondary">
        {menu}
      </MenuButton>
      <MenuButton label="Edit Document" size="large" type="secondary">
        {menu}
      </MenuButton>
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
