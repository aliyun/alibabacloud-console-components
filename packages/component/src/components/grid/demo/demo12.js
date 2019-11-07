import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo12.less'

const { Row, Col } = Grid

const Demo12 = () =>(
  <div className="justify-demo">
    <div className="demo-title">start</div>
    <Row justify="start">
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
    </Row>

    <div className="demo-title">center</div>
    <Row justify="center">
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
    </Row>

    <div className="demo-title">end</div>
    <Row justify="end">
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
    </Row>

    <div className="demo-title">space-between</div>
    <Row justify="space-between">
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
    </Row>

    <div className="demo-title">space-around</div>
    <Row justify="space-around">
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
      <Col span="4">col-4</Col>
    </Row>
  </div>
)

export default Demo12