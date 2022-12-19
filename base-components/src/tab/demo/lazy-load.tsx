/**
 * @title 按需加载和自动卸载
 * @description 默认情况 Tab 不会提前渲染好所有的内容，而是根据 Tab 的激活情况依次进行渲染。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

const tabs = [
  { tab: 'Home', key: 0, content: 'This is home page' },
  { tab: 'Document', key: 1, content: 'This is document page' },
  { tab: 'API', key: 2, content: 'This is api page' }
]

export default function DemoComponent() {
  const content = (
    <div>
      <div>use lazyLoad=false to render all tab items</div>
      <Tab lazyLoad={false}>
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <div>Unmount other items while switch tab</div>
      <Tab unmountInactiveTabs>
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
