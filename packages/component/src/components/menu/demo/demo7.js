import React from 'react'
import { Menu } from '@alicloud/console-components'
import styled from 'styled-components'

const { SubMenu, Item } = Menu

const Demo = () => {
  return (
    <SWrapper>
      <Menu
        hozInLine
        direction="hoz"
        mode="popup"
        className="my-hoz-menu"
        popupClassName="my-hoz-menu"
        popupAutoWidth
      >
        <Item key="1">First</Item>
        <Item key="2">Second</Item>
        <SubMenu label="Sub Nav">
          <Item key="sub-12">Sub option 1</Item>
          <Item key="sub-22">Sub option 2</Item>
          <SubMenu label="Sub Sub Nav">
            <Item key="sub-sub-122">Sub sub option 1</Item>
            <Item key="sub-sub-222">Sub sub option 2</Item>
          </SubMenu>
        </SubMenu>
        <SubMenu label="Sub Nav">
          <Item key="sub-1">Sub option 1</Item>
          <Item key="sub-2">Sub option 2</Item>
          <SubMenu label="Sub Sub Nav">
            <Item key="sub-sub-1">Sub sub option 1</Item>
            <Item key="sub-sub-2">Sub sub option 2</Item>
          </SubMenu>
        </SubMenu>
        <Item key="3">Third</Item>
      </Menu>
    </SWrapper>
  )
}

export default Demo

export const demoMeta = {
  zhName: '横向菜单条',
  zhDesc: `展示横向导航菜单条的用法。`,
}

const SWrapper = styled.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 40px;
  }
`
