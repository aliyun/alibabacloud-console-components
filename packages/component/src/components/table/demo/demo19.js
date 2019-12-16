import React, { Component, useState } from 'react'
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

const Demo19 = () => {
  const [widths, setWidths] = useState({
    id: 100,
  })

  const onResizeChange = (dataIndex, value) => {
    setWidths({
      ...widths,
      [dataIndex]: widths[dataIndex] + value,
    })
  }

  return (
    <Table
      dataSource={dataSource()}
      rowSelection={rowSelection}
      onResizeChange={onResizeChange}
    >
      <Table.Column title="Id" dataIndex="id" resizable width={widths.id} />
      <Table.Column title="Title" dataIndex="title.name" width={400} />
      <Table.Column title="Time" dataIndex="time" width={600} />
      <Table.Column cell={render} width={200} />
    </Table>
  )
}

export default Demo19;

export const demoMeta = {
  zhName: `重设列的尺寸`,
  zhDesc: '通过`onResizeChange`来让列宽可以调整',
}
