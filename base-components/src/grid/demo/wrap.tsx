/**
 * @title 溢出后是否换行
 * @description （不支持 IE9 浏览器）默认列在行中宽度溢出后不会换行，如果想自动换行，请为 `Row` 设置 `wrap` 为 true。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="wrap-demo">
      <div className="grid-fixed-demo-title">No wrap</div>
      <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="8">col-8</Col>
      </Row>
      <div className="grid-fixed-demo-title">Wrap</div>
      <Row wrap>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="8">col-8</Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .wrap-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .wrap-demo .next-row {
    margin: 10px 0;
  }

  .wrap-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
