import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo11.less'

const { Row, Col } = Grid

const Demo11 = () =>(
  <div className="align-demo">
    <div className="demo-title">top</div>
    <Row align="top">
      <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
      <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
      <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
    </Row>

    <div className="demo-title">center</div>
    <Row align="center">
      <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
      <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
      <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
    </Row>

    <div className="demo-title">bottom</div>
    <Row align="bottom">
      <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
      <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
      <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
    </Row>

    <div className="demo-title">baseline</div>
    <Row align="baseline">
      <Col span="8" style={{ height: '100px', paddingTop: '20px', fontSize: '30px' }}>col-8</Col>
      <Col span="8" style={{ height: '50px', paddingTop: '20px', fontSize: '20px' }}>col-8</Col>
      <Col span="8" style={{ height: '150px', paddingTop: '20px', fontSize: '40px' }}>col-8</Col>
    </Row>

    <div className="demo-title">stretch</div>
    <Row align="stretch" style={{ height: '150px' }}>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>

    <div className="demo-title">override</div>
    <Row align="top">
      <Col align="bottom" span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
      <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
      <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
    </Row>
  </div>
)

export default Demo11