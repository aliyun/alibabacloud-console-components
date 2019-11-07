import React from 'react'
import { MenuButton } from '@alicloud/console-components'

const { Item, Group, Divider } = MenuButton

const Demo3 = () => (
  <MenuButton type="primary" label="Document Edit">
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

export default Demo3