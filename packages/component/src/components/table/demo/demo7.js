import React, { Component } from 'react'
import { Table } from '@alicloud/console-components'

const onRowClick = function (record, index, e) {
  console.log(record, index, e);
},

dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result;
},
    
render = (value, index, record) => {
  return <a>Remove({record.id})</a>;
},

getCellProps = (rowIndex, colIndex) => {
  if (rowIndex === 2 && colIndex === 1) {
    return {
      colSpan: 2,
      rowSpan: 3
    }
  }
  if (rowIndex === 1 && colIndex === 2) {
    return {
      colSpan: 2,
      rowSpan: 1
    }
  }
}

const Demo7 = () => (
  <Table dataSource={dataSource()} onRowClick={onRowClick} getCellProps={getCellProps}>
    <Table.Column title="Id" dataIndex="id"/>
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time"/>
    <Table.Column cell={render} width={200}/>
  </Table>
)

export default Demo7