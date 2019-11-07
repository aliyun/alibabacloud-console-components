import React from 'react'
import { SplitButton } from '@alicloud/console-components'
import '../inline-group.less'

const menus = [
  'Add',
  'Commit',
  'Rebase',
]

const menu = menus.map((item) => (
  <SplitButton.Item key={`menu-item-${item}`}>{item}</SplitButton.Item>
))

const SizeDemo = () => (
  <div className="split-button-demo-inline-group">
    <SplitButton
      label="Small Button"
      size="small"
    >
      {menu}
    </SplitButton>
    <SplitButton
      label="Medium Button"
      size="medium"
    >
      {menu}
    </SplitButton>
    <SplitButton
      label="Large Button"
      size="large"
    >
      {menu}
    </SplitButton>
  </div>
)

export default SizeDemo
