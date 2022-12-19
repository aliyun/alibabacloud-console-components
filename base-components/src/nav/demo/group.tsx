/**
 * @title 分组
 * @description 建议只在垂直布局中使用。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav } from '@alicloudfe/components'

const { Item, Group } = Nav

export default function DemoComponent() {
  const content = (
    <Nav style={{ width: 240 }}>
      <Group label="Group Label 1">
        <Item icon="account">Navigation One</Item>
        <Item icon="account">Navigation Two</Item>
        <Item icon="account">Navigation Three</Item>
      </Group>
      <Group label="Group Label 2">
        <Item icon="account">Navigation Four</Item>
        <Item icon="account">Navigation Five</Item>
        <Item icon="account">Navigation Six</Item>
      </Group>
    </Nav>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
