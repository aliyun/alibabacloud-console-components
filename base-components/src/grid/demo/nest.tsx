/**
 * @title 嵌套布局
 * @description `Col` 下也可嵌套 `Row`，以完成更细致的布局。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
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
  return <Style>{content}</Style>
}
const Style = styled.div`
  .nest-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .nest-demo .demo-row {
    margin: 10px 0;
  }

  .nest-demo .demo-col-inset {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
