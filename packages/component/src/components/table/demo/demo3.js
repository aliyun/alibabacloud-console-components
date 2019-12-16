import React, { Component } from 'react'
import { Table, Button } from '@alicloud/console-components'

const dataSource = (i, j) => {
  const result = []
  for (let a = i; a < j; a++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: 100306660940 + a,
      time: 2000 + a,
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a>Remove({record.id})</a>
}

export default class Demo3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowSelection: {
        onChange: this.onChange.bind(this),
        onSelect(selected, record, records) {
          console.log('onSelect', selected, record, records)
        },
        onSelectAll(selected, records) {
          console.log('onSelectAll', selected, records)
        },
        selectedRowKeys: [],
        getProps: record => {
          return {
            disabled: record.id === 100306660941,
          }
        },
      },
      dataSource: dataSource(0, 5),
    }
  }

  onChange(ids, records) {
    const { rowSelection } = this.state
    rowSelection.selectedRowKeys = ids
    console.log('onChange', ids, records)
    this.setState({ rowSelection })
  }

  clear() {
    const { rowSelection } = this.state
    rowSelection.selectedRowKeys = []
    this.setState({ rowSelection })
  }

  toggleLoading() {
    this.setState({ loading: !this.state.loading })
  }

  changeMode() {
    const { rowSelection } = this.state
    const { mode } = rowSelection
    const { selectedRowKeys } = rowSelection
    rowSelection.mode = mode === 'single' ? 'multiple' : 'single'
    rowSelection.selectedRowKeys =
      selectedRowKeys.length === 1 ? selectedRowKeys : []
    this.setState({ rowSelection })
  }

  modifyDataSource() {
    this.setState({
      dataSource: dataSource(9, 14),
    })
  }

  render() {
    return (
      <div>
        <p>
          <Button onClick={this.clear.bind(this)}>Clear Selection</Button>&nbsp;
          <Button onClick={this.changeMode.bind(this)}>
            Switch single mode
          </Button>
          &nbsp;
          <Button onClick={this.toggleLoading.bind(this)}>
            Toggle loading
          </Button>
          &nbsp;
          <Button onClick={this.modifyDataSource.bind(this)}>
            Modify dataSource
          </Button>
        </p>
        <Table
          dataSource={this.state.dataSource}
          loading={this.state.loading}
          rowSelection={this.state.rowSelection}
        >
          <Table.Column title="Id" dataIndex="id" />
          <Table.Column title="Title" dataIndex="title.name" />
          <Table.Column title="Time" dataIndex="time" />
          <Table.Column cell={render} width={200} />
        </Table>
      </div>
    )
  }
}

export const demoMeta = {
  zhName: `可选择`,
  zhDesc: `演示全选和单选受控的功能`,
}
