/**
 * @title 基本
 * @description 展示Menu的所有UI能力，例如菜单项、不可用菜单项、分组项、可展开项、链接项等。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Menu } from '@alicloudfe/components'

const { SubMenu, Item, Group, Divider } = Menu

export default function DemoComponent() {
  const content = (
    <Menu className="my-menu" defaultOpenKeys="sub-menu">
      <Item key="1">Option 1</Item>
      <Item disabled key="2">
        Disabled option 2
      </Item>
      <Divider key="divider" />
      <Group label="Group">
        <Item key="group-1">Group option 1</Item>
        <Item key="group-2">Group option 2</Item>
      </Group>
      <Divider />
      <SubMenu key="sub-menu" label="Sub menu">
        <Item key="sub-1">Sub option 1</Item>
        <Item key="sub-2">Sub option 2</Item>
        <Item disabled key="sub-3">
          <a href="https://www.taobao.com/" target="__blank">
            Disabled Option Link 3
          </a>
        </Item>
        <Item key="sub-4">
          <a href="https://www.taobao.com/" target="__blank">
            Option Link 4
          </a>
        </Item>
      </SubMenu>
      <Item key="3" helper="CTRL+P">
        Option 3
      </Item>
      <Item disabled key="4">
        <a href="https://www.taobao.com/" target="__blank">
          Disabled Option Link
        </a>
      </Item>
      <Item key="5">
        <a href="https://www.taobao.com/" target="__blank">
          Option Link
        </a>
      </Item>
    </Menu>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .my-menu {
    width: 200px;
  }
`
