/**
 * @title 无障碍键盘操作指南
 * @description 默认 `<Row>` 和 `<Col>` 会加上 `role="row"` 和 `role="gridcell"`, 但是为了完美的无障碍实现, 开发者还应该在外部容器加上 `role="grid"`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

export default function DemoComponent() {
  const content = (
    <div role="grid">
      <Row>
        <Col span={6}>1</Col>
        <Col span={6}>2</Col>
        <Col span={6}>3</Col>
        <Col span={6}>4</Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          1
        </Col>
        <Col span={6} offset={6}>
          2
        </Col>
      </Row>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
