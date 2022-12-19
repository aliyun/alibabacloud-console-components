/**
 * @title 多列水平方向对齐方式
 * @description （不支持 IE9 浏览器）基于 Flex 的 justify-content 属性实现，在 `Row` 上设置 `justify` 属性，即可行内多列水平方向对齐方式：start（左对齐，默认），center（居中对齐），end（右对齐），space-between（两端对齐，项目之间的间隔都相），space-around（两侧的间隔相等，列之间的间隔比列与左右两端的间隔大一倍）。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="justify-demo">
      <div className="grid-fixed-demo-title">start</div>
      <Row justify="start">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>

      <div className="grid-fixed-demo-title">center</div>
      <Row justify="center">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>

      <div className="grid-fixed-demo-title">end</div>
      <Row justify="end">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>

      <div className="grid-fixed-demo-title">space-between</div>
      <Row justify="space-between">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>

      <div className="grid-fixed-demo-title">space-around</div>
      <Row justify="space-around">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .justify-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .justify-demo .next-row {
    margin: 10px 0;
  }

  .justify-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
