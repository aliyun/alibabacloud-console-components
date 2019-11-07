import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo9.less'

const { Row, Col } = Grid

const Demo9 = () =>(
  <div className="offset-demo">
    <div className="demo-title">Normal offset, set offset from 1 to 24</div>
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

    <div className="demo-title">Adaptive offset</div>
    <Row>
      <Col>col</Col>
      <Col offset="12">offset-12</Col>
    </Row>
  </div>

)

export default Demo9