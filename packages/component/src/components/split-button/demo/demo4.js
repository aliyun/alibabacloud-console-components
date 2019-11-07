import React from 'react'
import { SplitButton } from '@alicloud/console-components'


const { Item, Group, Divider } = SplitButton

const Demo4 = () => (
  <SplitButton label="Edit Document">
    <Item>Undo</Item>
    <Item>Redo</Item>
    <Divider />
    <Group>
      <Item helper="CTRL + X">Cut</Item>
      <Item helper="CTRL + C">Copy</Item>
      <Item helper="CTRL + V">Paste</Item>
    </Group>
  </SplitButton>
)

export default Demo4