/**
 * @title 偏移
 * @description （不支持 IE9 浏览器）列可以向右偏移一定距离，该距离的计算方式和列所占宽度计算方式相同。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="offset-demo">
      <div className="grid-fixed-demo-title">
        Normal offset, set offset from 1 to 24
      </div>
      <Row>
        <Col offset="0">offset-0</Col>
      </Row>
      <Row>
        <Col offset="4">offset-4</Col>
      </Row>
      <Row>
        <Col offset="8">offset-8</Col>
      </Row>
      <Row>
        <Col offset="12">offset-12</Col>
      </Row>

      <div className="grid-fixed-demo-title">Adaptive offset</div>
      <Row>
        <Col>col</Col>
        <Col offset="12">offset-12</Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .offset-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .offset-demo .next-row {
    margin: 10px 0;
  }

  .offset-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
