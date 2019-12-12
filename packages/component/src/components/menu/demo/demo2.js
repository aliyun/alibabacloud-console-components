import React from 'react'
import { Menu } from '@alicloud/console-components'

const { SubMenu, Item } = Menu

const Demo2 = () => (
  <div>
    <Menu defaultOpenKeys="1" className="my-menu" openMode="single">
      <SubMenu key="0" label="Sub menu 1">
        <Item key="0-0">Sub option 1</Item>
        <Item key="0-1">Sub option 2</Item>
        <Item key="0-2">Sub option 3</Item>
      </SubMenu>
      <SubMenu key="1" label="Sub menu 2">
        <Item key="1-0">Sub option 1</Item>
        <Item key="1-1">Sub option 2</Item>
        <Item key="1-2">Sub option 3</Item>
      </SubMenu>
      <SubMenu key="2" label="Sub menu 3">
        <Item key="2-0">Sub option 1</Item>
        <Item key="2-1">Sub option 2</Item>
        <Item key="2-2">Sub option 3</Item>
      </SubMenu>
      <SubMenu key="3" label="Sub menu 4">
        <Item key="3-0">Sub option 1</Item>
        <Item key="3-1">Sub option 2</Item>
        <Item key="3-2">Sub option 3</Item>
      </SubMenu>
    </Menu>
  </div>
)

export default Demo2

export const demoMeta = {
  zhName: '内连菜单展开模式',
  zhDesc: `通过设置 openMode 为 'single'，可以让菜单同时只能展开一个内连子菜单，默认为可以同时展开多个。`,
}
