/**
 * @title 禁止键盘事件
 * @description 通过 `disabledKeyboard=true` 禁止 Tab 聚焦时的键盘 `↑`,`↓`,`←` ,`→` 切换
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Tab disableKeyboard>
      <Tab.Item title="Home" key="1">
        Home content
      </Tab.Item>
      <Tab.Item title="Documentation" key="2">
        Doc content
      </Tab.Item>
      <Tab.Item title="Help" key="3">
        Help Content
      </Tab.Item>
    </Tab>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
