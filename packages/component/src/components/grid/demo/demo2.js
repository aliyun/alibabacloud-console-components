import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo2.less'

const { Row, Col } = Grid

const Demo2 = () => (
  <div className="mixin-demo">
    <div className="demo-title">Two-column layout, left column fixed, right column adaptive</div>
    <Row>
      <Col fixedSpan="16">col-fixed-16</Col>
      <Col>col</Col>
    </Row>

    <div className="demo-title">Two-column layout, right column fixed, left column adaptive</div>
    <Row>
      <Col>col</Col>
      <Col fixedSpan="16">col-fixed-16</Col>
    </Row>

    <div className="demo-title">Three-column layout, left column and right column fixed, middle column adaptive</div>
    <Row>
      <Col fixedSpan="8">col-fixed-8</Col>
      <Col>col</Col>
      <Col fixedSpan="8">col-fixed-8</Col>
    </Row>
  </div>
)

export default Demo2