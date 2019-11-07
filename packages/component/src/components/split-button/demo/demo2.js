import React from 'react'
import { SplitButton } from '@alicloud/console-components'

const { Item } = SplitButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>)

const Demo2 = () => (
  <div>
    <SplitButton label="Edit Document" size="small">{menu}</SplitButton> 
    &nbsp; &nbsp;
    <SplitButton label="Edit Document" size="medium">{menu}</SplitButton> 
    &nbsp; &nbsp;
    <SplitButton label="Edit Document" size="large">{menu}</SplitButton>
  </div>
)

export default Demo2