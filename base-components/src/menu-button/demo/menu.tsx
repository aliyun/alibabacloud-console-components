/**
 * @title 复杂菜单
 * @description 支持菜单组和菜单分割线，使用方法同 `Menu.Group`, `Menu.Item`, `Menu.Divider`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { MenuButton } from '@alicloudfe/components'

const { Item, Group, Divider } = MenuButton

function selectItem(id) {
  console.log(id)
}

export default function DemoComponent() {
  const content = (
    <MenuButton type="primary" label="Document Edit" onItemClick={selectItem}>
      <Item key="undo">Undo</Item>
      <Item key="redo">Redo</Item>
      <Divider />
      <Group>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </Group>
    </MenuButton>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
