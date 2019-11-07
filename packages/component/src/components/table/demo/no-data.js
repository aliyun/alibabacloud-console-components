import React, { Component } from 'react'
import { Table } from '@alicloud/console-components'

const dataSource = []

const render = (value, index, record) => {
  return <a href="javascript:;">Remove({record.id})</a>
}

const NoData = () => (
	<Table dataSource={dataSource}>
    <Table.Column title="Id" dataIndex="id"/>
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time"/>
    <Table.Column cell={render}/>
  </Table>
)

export default NoData