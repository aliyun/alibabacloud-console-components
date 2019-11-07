import React, { Component } from 'react'
import { Table, Button } from '@alicloud/console-components'

const onRowClick = function(record, index, e) {
  console.log(record, index, e);
},
dataSource = (j) => {
  const result = []
  for (let i = 0; i < j; i++) {
    result.push({
      title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
},

render = (value, index, record) => {
  return <a>Remove({record.id})</a>;
}

export default class Demo12 extends React.Component {

  state = {
    dataSource: dataSource(200)
  }
  onClick = () => {
    this.setState({
      dataSource: dataSource(4)
    })
  }
  render() {
    return (
      <div>
        <p><Button onClick={this.onClick}>Reduce count</Button></p>
        <Table dataSource={this.state.dataSource} onRowClick={onRowClick} fixedHeader maxBodyHeight={400}>
          <Table.Column title="Id1" dataIndex="id" width={140}/>
          <Table.ColumnGroup>
            <Table.Column title="Id2" dataIndex="id" lock width={140}/>
            <Table.Column title="Title" dataIndex="title.name" width={400}/>
            <Table.Column title="Title" dataIndex="title.name" width={200}/>
          </Table.ColumnGroup>
          <Table.ColumnGroup>
            <Table.Column title="Time" dataIndex="time" width={500}/>
            <Table.Column cell={render} width={200} lock="right"/>
          </Table.ColumnGroup>
        </Table>
      </div>
    )
  }
}