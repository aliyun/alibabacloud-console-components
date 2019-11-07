import React from 'react'
import { Menu } from '@alicloud/console-components'

const { Item, Group, SubMenu, Divider } = Menu

const Demo1 = () => (
  <div>
    <Menu
      defaultOpenKeys="sub-menu"
    >
      <Item key="1">Option 1</Item>
      <Item disabled key="2">Disabled option 2</Item>
      <Divider key="divider" />
      <Group label="Group">
        <Item key="group-1">Group option 1</Item>
        <Item key="group-2">Group option 2</Item>
      </Group>
      <Divider />
      <SubMenu key="sub-menu" label="Sub menu">
        <Item key="sub-1">Sub option 1</Item>
        <Item key="sub-2">Sub option 2</Item>
      </SubMenu>
      <Item key="3" helper="CTRL+P">Option 3</Item>
    </Menu>
  </div>
)

export default Demo1
