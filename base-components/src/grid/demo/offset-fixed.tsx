/**
 * @title 固定宽度偏移
 * @description （不支持 IE9 浏览器）列可以向右偏移一定距离，该距离的计算方式和固定宽度列的宽度相同。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="offset-fixed-demo">
      <div className="grid-fixed-demo-title">
        Normal offset, set offset from 1 to 30
      </div>
      <Row>
        <Col fixedOffset="0">offset-fixed-0</Col>
      </Row>
      <Row>
        <Col fixedOffset="4">offset-fixed-4</Col>
      </Row>
      <Row>
        <Col fixedOffset="8">offset-fixed-8</Col>
      </Row>
      <Row>
        <Col fixedOffset="12">offset-fixed-12</Col>
      </Row>

      <div className="grid-fixed-demo-title">Adaptive offset</div>
      <Row>
        <Col>col</Col>
        <Col fixedOffset="12">offset-fixed-12</Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .offset-fixed-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .offset-fixed-demo .next-row {
    margin: 10px 0;
  }

  .offset-fixed-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
