import React from 'react'
import { Dropdown, Menu } from '@alicloud/console-components'

const menu = (
  <Menu>
    <Menu.Item>Option 1</Menu.Item>
    <Menu.Item>Option 2</Menu.Item>
    <Menu.Item>Option 3</Menu.Item>
    <Menu.Item>Option 4</Menu.Item>
  </Menu>
)

const Demo2 = () => (
  <Dropdown trigger={<a>Click me</a>} triggerType="click">
    {menu}
  </Dropdown>
)

export default Demo2