/**
 * @title 响应式布局
 * @description 类似 Bootstrap 的响应式设计，预设6个响应尺寸：xxs(320px), xs(480px), s(720px), m(990px), l(1200px), xl(1500px)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="breakpoint-demo">
      <div className="grid-fixed-demo-title">
        Resize browser to see how each column changes
      </div>
      <Row>
        <Col xs={12} s={8} m={6}>
          Col
        </Col>
        <Col xs={6} s={8} m={6}>
          Col
        </Col>
        <Col xs={6} s={8} m={12}>
          Col
        </Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .breakpoint-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .breakpoint-demo .next-row {
    margin: 10px 0;
  }

  .breakpoint-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
