/**
 * @title 小号尺寸
 * @description 可以通过 `size=small` 设置小号尺寸，一般用于弹出框等较狭窄的容器内。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

const tabs = [
  { tab: 'Home', key: 'home', content: 'This is home page' },
  { tab: 'Document', key: 'doc', content: 'This is document page' },
  { tab: 'API', key: 'api', content: 'This is api page' }
]

export default function DemoComponent() {
  const content = (
    <div>
      <Tab size="small">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <Tab size="small" shape="wrapped">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <Tab size="small" shape="text">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <Tab size="small" shape="capsule">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
    </div>
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
