import React, { Component } from 'react'
import { Table, Button } from '@alicloud/console-components'

const onRowClick = function(record, index, e) {
  console.log(record, index, e)
}
const dataSource = () => {
  const result = []
  for (let i = 0; i < 100; i++) {
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

export default class Demo14 extends React.Component {
  state = {
    dataSource: [],
    cols: [
      <Table.Column
        title="Title"
        dataIndex="title.name"
        width={400}
        key="name1"
        lock
      />,
      <Table.ColumnGroup title="abc" key="name-group">
        <Table.Column
          title="Title"
          dataIndex="title.name"
          width={100}
          key="name2"
        />
        <Table.Column
          title="Title"
          dataIndex="title.name"
          width={400}
          key="name3"
        />
      </Table.ColumnGroup>,
      <Table.Column title="Time" dataIndex="time" width={500} key="time" />,
    ],
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dataSource: dataSource(),
        loading: false,
      })
    }, 200)
  }

  reduceCol = () => {
    this.setState({
      cols: [
        <Table.Column
          title="Title"
          dataIndex="title.name"
          width={400}
          key="name1"
          lock
        />,
        <Table.Column title="Time" dataIndex="time" width={100} key="time" />,
      ],
    })
  }

  render() {
    return (
      <div>
        <p>
          <Button onClick={this.reduceCol}>Reduce Cols</Button>
        </p>
        <Table
          dataSource={this.state.dataSource}
          onRowClick={onRowClick}
          fixedHeader
          loading={this.state.loading}
        >
          <Table.Column
            title="Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id"
            dataIndex="id"
            lock
            width={140}
          />
          {this.state.cols}
          <Table.Column cell={render} width={200} />
        </Table>
      </div>
    )
  }
}

export const demoMeta = {
  zhName: `锁列`,
  zhDesc: `演示表格锁列的功能`,
}
