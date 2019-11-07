import React from 'react'
import { MenuButton } from '@alicloud/console-components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>)

const Demo2 = () => (
  <div>
    <MenuButton label="Edit Document" size="small">{menu}</MenuButton> 
    &nbsp; &nbsp;
    <MenuButton label="Edit Document" size="medium">{menu}</MenuButton> 
    &nbsp; &nbsp;
    <MenuButton label="Edit Document" size="large">{menu}</MenuButton>
  </div>
)

export default Demo2