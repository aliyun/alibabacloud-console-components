/**
 * @title 自定义元素渲染类型
 * @description 使用 `component` 来指定需要渲染的元素类型，默认为 `div`
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div className="basic-demo">
      <div className="grid-fixed-demo-title">Rendered as `ul` and `li`</div>
      <Row component="ul">
        <Col span="12" component="li">
          col-12
        </Col>
        <Col span="12" component="li">
          col-12
        </Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .basic-demo ul {
    list-style: none;
    padding: 0;
  }

  .basic-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .basic-demo .next-row {
    margin: 10px 0;
  }

  .basic-demo .next-col {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
