import React from 'react'
import { SplitButton } from '@alicloud/console-components'

const { Item } = SplitButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>)

const Demo1 = () => (
  <div>
    <SplitButton label="Edit Document">{menu}</SplitButton> &nbsp; &nbsp;
    <SplitButton label="Edit Document" type="primary">{menu}</SplitButton>&nbsp;&nbsp;
    <SplitButton label="Edit Document" type="secondary">{menu}</SplitButton><br /><br />
  </div> 
)

export default Demo1
