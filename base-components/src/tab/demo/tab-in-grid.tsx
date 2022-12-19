/**
 * @title 在 Grid 中使用 Tab
 * @description 当 Tab 位于 Grid 组件的布局中时，由于 Grid 默认使用 `flex` 布局方式，当选项卡数量过多时，会导致内层元素撑起整个 `flex` 容器，此时需要给容器添加自定义样式 `overflow: hidden`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab, Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

const tabs = (function (length) {
  const arr = []
  for (let i = 1; i < length; i++) {
    arr.push({ tab: `tab ${i}`, key: i, content: `tab ${i} content` })
  }
  return arr
})(15)

export default function DemoComponent() {
  const content = (
    <div className="custom-wrapper">
      <Row className="custom-row">
        <Col fixedSpan="12" className="custom-col-sidebar">
          Sidebar
        </Col>
        <Col className="custom-col-content">
          <Tab>
            {tabs.map((item) => (
              <Tab.Item key={item.key} title={item.tab}>
                {item.content}
              </Tab.Item>
            ))}
          </Tab>
        </Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-row {
    border: 1px solid #ccc;
  }

  .custom-col-sidebar {
    border-right: 1px solid #ccc;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }

  .custom-col-content {
    overflow: hidden;
  }
`
