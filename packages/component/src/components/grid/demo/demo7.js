import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo7.less'

const { Row, Col } = Grid

const Demo7 = () => (
  <div className="hidden-demo">
    <div className="demo-title">Hide columns under all breakpoints, resize browser to see if the second column is hidden or shown</div>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="16" hidden>col-16</Col>
    </Row>

    <div className="demo-title">Hide columns under a breakpoint such as xs, resize browser to see if the second column is hidden or shown</div>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="16" hidden="xs">col-16</Col>
    </Row>

    <div className="demo-title">Hide columns under some breakpoints such as xs and s, resize browser to see if the second column is hidden or shown</div>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="16" hidden={['xs', 's']}>col-16</Col>
    </Row>
  </div>
)

export default Demo7