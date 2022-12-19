/**
 * @title 基本
 * @description 最简单的用法。支持`Button`的 `shape`, `type`, `size`, `component`, `ghost` 等属性透传。
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
    <div>
      <Box direction="row" spacing={20}>
        <MenuButton label="Document Edit">{menu}</MenuButton>
        <MenuButton type="primary" label="Document Edit">
          {menu}
        </MenuButton>
        <MenuButton type="secondary" label="Document Edit">
          {menu}
        </MenuButton>
      </Box>
      <br />
      <Box direction="row" spacing={20}>
        <MenuButton text label="Document Edit">
          {menu}
        </MenuButton>
        <MenuButton text type="primary" label="Document Edit">
          {menu}
        </MenuButton>
        <MenuButton text type="secondary" label="Document Edit">
          {menu}
        </MenuButton>
      </Box>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
