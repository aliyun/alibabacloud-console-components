import React from 'react'
import { MenuButton } from '@alicloud/console-components'
import '../inline-group.less'

const menus = [
  'Add',
  'Commit',
  'Rebase',
]

const menu = menus.map((item) => (
  <MenuButton.Item key={`menu-item-${item}`}>{item}</MenuButton.Item>
))

const SizeDemo = () => (
  <div className="menu-button-demo-inline-group">
    <MenuButton
      label="Small Button"
      size="small"
    >
      {menu}
    </MenuButton>
    <MenuButton
      label="Medium Button"
      size="medium"
    >
      {menu}
    </MenuButton>
    <MenuButton
      label="Large Button"
      size="large"
    >
      {menu}
    </MenuButton>
  </div>
)

export default SizeDemo
