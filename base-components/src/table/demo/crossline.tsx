/**
 * @title 十字参考轴
 * @description 适用于表头比较复杂，需要做表头分类的场景。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table } from '@alicloudfe/components'

const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
}
const render = (current) => {
  return <a> remove {current}</a>
}

export default function DemoComponent() {
  const content = (
    <Table dataSource={dataSource()} crossline>
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" dataIndex="time" />
      <Table.Column title="Operation" dataIndex="id" cell={render} />
    </Table>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
