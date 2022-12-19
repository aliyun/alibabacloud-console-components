/**
 * @title 重设列的尺寸
 * @description 通过onResizeChange来让列宽可以调整
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table } from '@alicloudfe/components'

const onChange = function (...args) {
    console.log(...args)
  },
  dataSource = () => {
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
        },
        id: 100306660940 + i,
        time: 2000 + i
      })
    }
    return result
  },
  render = (value, index, record) => {
    return <a>Remove({record.id})</a>
  },
  rowSelection = {
    onChange: onChange,
    getProps: (record) => {
      return {
        disabled: record.id === 100306660942
      }
    }
  }

class App extends React.Component {
  state = {
    widths: {
      id: 100
    }
  }
  onResizeChange = (dataIndex, value) => {
    const { widths } = this.state
    widths[dataIndex] = widths[dataIndex] + value
    this.setState({
      widths
    })
  }
  render() {
    return (
      <Table
        dataSource={dataSource()}
        rowSelection={rowSelection}
        onResizeChange={this.onResizeChange}
      >
        <Table.Column
          title="Id"
          dataIndex="id"
          resizable
          width={this.state.widths.id}
        />
        <Table.Column title="Title" dataIndex="title.name" width={400} />
        <Table.Column title="Time" dataIndex="time" width={600} />
        <Table.Column cell={render} width={200} />
      </Table>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
