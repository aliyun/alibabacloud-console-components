import React, { Component } from 'react'
import { Table } from '@alicloud/console-components'
import PropTypes from 'prop-types'

/* eslint-disable react/no-multi-comp,react/prop-types */
const { Header, Cell } = Table
const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      id: 100306660940 + i,
      time: 2000 + i,
    })
  }
  return result
}

const AppHeader = (props, context) => {
  const { columns } = props
  const { onChange } = context
  const { length } = columns[columns.length - 1]
  return (
    <Header {...props}>
      <tr>
        <Cell colSpan={length}>
          <a onClick={() => onChange(true)} href="javascript:;">
            Select all
          </a>
          &nbsp;
          <a onClick={() => onChange(false)} href="javascript:;">
            Unselect all
          </a>
        </Cell>
      </tr>
    </Header>
  )
}

AppHeader.contextTypes = {
  onChange: PropTypes.func,
}

export default class Demo18 extends React.Component {
  static childContextTypes = {
    onChange: PropTypes.func,
  }

  state = {
    selectedKeys: [],
  }

  getChildContext() {
    return {
      onChange: this.onChange,
    }
  }

  dataSource = dataSource()

  onChange = checked => {
    let selectedKeys = []
    if (checked) {
      selectedKeys = this.dataSource.map(item => item.id)
    }
    this.onRowChange(selectedKeys)
  }

  onRowChange = selectedKeys => {
    this.setState({
      selectedKeys,
    })
  }

  render() {
    return (
      <span>
        <Table
          dataSource={this.dataSource}
          components={{
            Header: AppHeader,
          }}
          rowSelection={{
            selectedRowKeys: this.state.selectedKeys,
            onChange: this.onRowChange,
          }}
        >
          <Table.Column title="Id" dataIndex="id" />
          <Table.Column title="Title" dataIndex="title" />
          <Table.Column title="Time" dataIndex="time" />
        </Table>
      </span>
    )
  }
}

export const demoMeta = {
  zhName: `扩展`,
  zhDesc: `通过Table暴露的子组件进行扩展`,
}
