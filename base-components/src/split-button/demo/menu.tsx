/**
 * @title 复杂菜单展示
 * @description 支持菜单组和菜单分割线，使用方法同 `Menu.Group`, `Menu.Item`, `Menu.Divider`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { SplitButton } from '@alicloudfe/components'

const { Item, Group, Divider } = SplitButton

export default function DemoComponent() {
  const content = (
    <SplitButton
      type="primary"
      label="Edit Document"
      onItemClick={(key) => console.log(key)}
    >
      <Item>Undo</Item>
      <Item>Redo</Item>
      <Divider />
      <Group>
        <Item helper="CTRL + X">Cut</Item>
        <Item helper="CTRL + C">Copy</Item>
        <Item helper="CTRL + V">Paste</Item>
      </Group>
    </SplitButton>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
