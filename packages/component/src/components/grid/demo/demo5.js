import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo5.less'

const { Row, Col } = Grid

const Demo5 = () => (
  <div className="nest-demo">
    <Row className="demo-row">
      <Col span="10">
        <Row>
          <Col span="6">
            <div className="demo-col-inset">col-10-6</div>
          </Col>
          <Col span="18">
            <div className="demo-col-inset">col-10-18</div>
          </Col>
        </Row>
      </Col>
      <Col span="14">
        <Row>
          <Col span="18">
            <div className="demo-col-inset">col-14-18</div>
          </Col>
          <Col span="6">
            <div className="demo-col-inset">col-14-6</div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

export default Demo5