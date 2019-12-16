import React from 'react'
import { Table } from '@alicloud/console-components'

const dataSource = []

const render = (value, index, record) => {
  return <a href="javascript:;">Remove({record.id})</a>
}

const Demo21 = () => (
  <Table dataSource={dataSource}>
    <Table.Column title="Id" dataIndex="id" />
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time" />
    <Table.Column cell={render} />
  </Table>
)

export default Demo21

export const demoMeta = {
  zhName: `数据集为空`,
  zhDesc: `演示了无数据时候的表格展示`,
}
