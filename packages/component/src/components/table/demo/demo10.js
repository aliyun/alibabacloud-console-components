import React, { Component } from 'react'
import { Table, Button } from '@alicloud/console-components'

const dataSource = (length) => {
  const result = []
  for (let i = 0; i < length; i++) {
    result.push({
      title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
}

export default class Demo10 extends React.Component {
  state = {
    sticky: false
  }
  
  onSwitch() {
    this.setState({
      sticky: true
    })
  }
  
  render() {
    return (
      <div>
        <p><Button onClick={this.onSwitch.bind(this)}>enable sticky</Button></p>
        <Table dataSource={dataSource(50)} fixedHeader stickyHeader={this.state.sticky}>
          <Table.Column title="Id" dataIndex="id"/>
          <Table.Column title="Title" dataIndex="title.name"/>
          <Table.Column title="Time" dataIndex="time"/>
        </Table>
      </div>
    )
  }
}