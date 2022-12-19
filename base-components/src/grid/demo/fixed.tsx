/**
 * @title 固定宽度列
 * @description 通过 `Col` 的 `fixedSpan` 属性来指定某列为固定宽度列，其宽度的计算方式为 20 * fixedSpan。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="mixin-demo">
      <div className="grid-fixed-demo-title">
        Two-column layout, left column fixed, right column adaptive
      </div>
      <Row>
        <Col fixedSpan="16">col-fixed-16</Col>
        <Col>col</Col>
      </Row>

      <div className="grid-fixed-demo-title">
        Two-column layout, right column fixed, left column adaptive
      </div>
      <Row>
        <Col>col</Col>
        <Col fixedSpan="16">col-fixed-16</Col>
      </Row>

      <div className="grid-fixed-demo-title">
        Three-column layout, left column and right column fixed, middle column
        adaptive
      </div>
      <Row>
        <Col fixedSpan="8">col-fixed-8</Col>
        <Col>col</Col>
        <Col fixedSpan="8">col-fixed-8</Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .mixin-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .mixin-demo .next-row {
    margin: 10px 0;
  }

  .mixin-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
