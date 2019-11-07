import React from 'react'
import { Table } from '@alicloud/console-components'

const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: 100306660940 + i,
      time: 2000 + i,
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a href="javascript:;">Remove({record.id})</a>
}

const Demo1 = () => (
  <Table dataSource={dataSource()}>
    <Table.Column title="Id" dataIndex="id" />
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time" />
    <Table.Column cell={render} />
  </Table>
)

export default Demo1
