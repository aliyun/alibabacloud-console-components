import React from 'react'
import { Menu } from '@alicloud/console-components'

const { SubMenu, Item, Divider } = Menu

const Demo5 = () => {
  return (
    <Menu style={{ width: '200px' }} mode="popup" triggerType="hover">
      <Item key="1">Option 1</Item>
      <Item key="2">Option 2</Item>
      <Item key="3">Option 3</Item>
      <Divider key="divider" />
      <SubMenu key="sub-1" label="Popup menu 1">
        <Item key="popup-1-1">Popup option 1</Item>
        <Item key="popup-1-2">Popup option 2</Item>
      </SubMenu>
      <SubMenu key="sub-2" label="Popup menu 2">
        <Item key="popup-2-1">Popup option 1</Item>
        <Item key="popup-2-2">Popup option 2</Item>
      </SubMenu>
    </Menu>
  )
}

export default Demo5

export const demoMeta = {
  zhName: 'hover 打开子菜单',
  zhDesc: `可以设置 triggerType 为 'hover'，来 hover 打开子菜单，默认点击打开子菜单。`,
}
