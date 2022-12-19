/**
 * @title 多选菜单
 * @description 通过 `selectMode` 控制菜单的选择模式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { MenuButton } from '@alicloudfe/components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  const content = (
    <div>
      <MenuButton
        label="Single"
        selectMode="single"
        onSelect={(keys) => console.log(keys)}
        type="secondary"
        style={{ marginRight: 20 }}
      >
        {menu}
      </MenuButton>
      <MenuButton
        label="Multiple"
        selectMode="multiple"
        onSelect={(keys) => console.log(keys)}
        type="secondary"
      >
        {menu}
      </MenuButton>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
