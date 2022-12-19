/**
 * @title 虚拟滚动
 * @description 使用 `useVirtual` 开启虚拟滚动，`scrollToRow` 滚动到指定列
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table } from '@alicloudfe/components'

const dataSource = (j) => {
  const result = []
  for (let i = 0; i < j; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: `100306660940${i}`,
      time: 2000 + i,
      index: i
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a>Remove({record.id})</a>
}

class App extends React.Component {
  state = {
    scrollToRow: 20
  }
  onBodyScroll = (start) => {
    this.setState({
      scrollToRow: start
    })
  }
  render() {
    return (
      <Table
        dataSource={dataSource(200)}
        maxBodyHeight={400}
        useVirtual
        scrollToRow={this.state.scrollToRow}
        onBodyScroll={this.onBodyScroll}
      >
        <Table.Column title="Id1" dataIndex="id" width={100} />
        <Table.Column title="Index" dataIndex="index" width={200} />
        <Table.Column title="Time" dataIndex="time" width={200} />
        <Table.Column title="Time" dataIndex="time" width={200} />
        <Table.Column title="Time" dataIndex="time" width={200} lock="right" />
        <Table.Column cell={render} width={200} lock />
      </Table>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
