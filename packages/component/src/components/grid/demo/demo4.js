import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo4.less'

const { Row, Col } = Grid

const Demo4 = () => (
  <div className="wrap-demo">
    <div className="demo-title">No wrap</div>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="8">col-8</Col>
    </Row>
    <div className="demo-title">Wrap</div>
    <Row wrap>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="8">col-8</Col>
    </Row>
  </div>
)

export default Demo4