import React, { Component } from 'react'
import { Table } from '@alicloud/console-components'

const onChange = function(...args) {
  console.log(...args)
}
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
  return <a>Remove({record.id})</a>
}
const rowSelection = {
  onChange,
  getProps: record => {
    return {
      disabled: record.id === 100306660942,
    }
  },
}

const Demo6 = () => (
  <Table dataSource={dataSource()} rowSelection={rowSelection}>
    <Table.Column title="Id" dataIndex="id" />
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time" />
    <Table.Column cell={render} width={200} />
  </Table>
)

export default Demo6

export const demoMeta = {
  zhName: `选择框属性`,
  zhDesc: `通过 rowSelection.getProps 来控制选择框属性`,
}
