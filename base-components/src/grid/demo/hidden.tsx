/**
 * @title 显示与隐藏
 * @description 提供了强大的响应式的显示与隐藏功能，支持在不同断点下的显示与隐藏。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="hidden-demo">
      <div className="grid-fixed-demo-title">
        Hide columns under all breakpoints, resize browser to see if the second
        column is hidden or shown
      </div>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="16" hidden>
          col-16
        </Col>
      </Row>

      <div className="grid-fixed-demo-title">
        Hide columns under a breakpoint such as xs, resize browser to see if the
        second column is hidden or shown
      </div>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="16" hidden="xs">
          col-16
        </Col>
      </Row>

      <div className="grid-fixed-demo-title">
        Hide columns under some breakpoints such as xs and s, resize browser to
        see if the second column is hidden or shown
      </div>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="16" hidden={['xs', 's']}>
          col-16
        </Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .hidden-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .hidden-demo .next-row {
    margin: 10px 0;
  }

  .hidden-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
