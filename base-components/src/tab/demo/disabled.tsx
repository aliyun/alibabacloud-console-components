/**
 * @title 禁用
 * @description 可以通过 `disabled` 属性禁用某一个选型卡。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Tab>
      <Tab.Item title="Tab 1" disabled key="1">
        Tab 1 content
      </Tab.Item>
      <Tab.Item title="Tab 2" key="2">
        Tab 2 content
      </Tab.Item>
      <Tab.Item title="Tab 3" key="3">
        Tab 3 content
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
