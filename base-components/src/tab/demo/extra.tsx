/**
 * @title 附加额外内容
 * @description 通过 `extra` 属性添加附加内容，请确保只在有限选项卡的情况下才使用附加内容, 该功能在选项卡溢出时会和溢出导航的按钮冲突。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab, Button } from '@alicloudfe/components'

function handleChange(key) {
  console.log(key)
}

function handleClick() {
  console.log('hello world')
}

const extraContent = (
  <Button type="primary" onClick={handleClick}>
    Hello world
  </Button>
)

export default function DemoComponent() {
  const content = (
    <div className="fusion-demo">
      <div className="demo-item-title">Extra in Horizontal</div>
      <Tab shape="wrapped" onChange={handleChange} extra={extraContent}>
        <Tab.Item title="Tab 1" key="1">
          Tab 1 Content
        </Tab.Item>
        <Tab.Item title="Tab 2" key="2">
          Tab 2 Content
        </Tab.Item>
        <Tab.Item title="Tab 3" key="3">
          Tab 3 Content
        </Tab.Item>
      </Tab>

      <div className="demo-item-title">Extra in Vertical</div>
      <Tab
        shape="wrapped"
        tabPosition="left"
        onChange={handleChange}
        extra={extraContent}
        contentClassName="custom-tab-content"
      >
        <Tab.Item title="Tab 1" key="1">
          Tab 1 Content
        </Tab.Item>
        <Tab.Item title="Tab 2" key="2">
          Tab 2 Content
        </Tab.Item>
        <Tab.Item title="Tab 3" key="3">
          Tab 3 Content
        </Tab.Item>
      </Tab>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .custom-tab-content {
    min-height: 150px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
