/**
 * @title 简单
 * @description 简单的表格渲染
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
const render = (value, index, record) => {
  return <a href="javascript:;">Remove({record.id})</a>
}

export default function DemoComponent() {
  const content = (
    <Table dataSource={dataSource()}>
      <Table.Column title="Id" htmlTitle="Unique Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" dataIndex="time" />
      <Table.Column cell={render} />
    </Table>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
