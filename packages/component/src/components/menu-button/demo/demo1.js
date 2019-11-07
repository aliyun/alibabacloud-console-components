import React from 'react'
import { MenuButton } from '@alicloud/console-components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>)

const Demo1 = () => (
  <div>
    <MenuButton label="Document Edit">{menu}</MenuButton>
    &nbsp;&nbsp;
    <MenuButton type="primary" label="Document Edit">{menu}</MenuButton>
    &nbsp;&nbsp;
    <MenuButton type="secondary" label="Document Edit">{menu}</MenuButton>
    <br /><br />
    <MenuButton text label="Document Edit">{menu}</MenuButton>
    &nbsp;&nbsp;
    <MenuButton text type="primary" label="Document Edit">{menu}</MenuButton>
    &nbsp;&nbsp;
    <MenuButton text type="secondary" label="Document Edit">{menu}</MenuButton>
  </div>
)

export default Demo1