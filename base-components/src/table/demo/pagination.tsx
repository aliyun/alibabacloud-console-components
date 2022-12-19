/**
 * @title 分页
 * @description 与分页结合
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table, Pagination } from '@alicloudfe/components'

const dataSource = (j) => {
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
        },
        id: 100306660940 + i + j,
        time: 2000 + j
      })
    }
    return result
  },
  render = (value, index, record) => {
    return <a href="javascript:;">Remove({record.id})</a>
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: dataSource(5)
    }
  }

  onChange = (currentPage) => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        dataSource: dataSource(currentPage * 5),
        loading: false
      })
    }, 200)
  }
  render() {
    return (
      <div>
        <Table dataSource={this.state.dataSource} loading={this.state.loading}>
          <Table.Column title="Id1" dataIndex="id" width={140} />
          <Table.Column title="Time" dataIndex="time" width={500} />
          <Table.Column cell={render} width={200} />
        </Table>
        <Pagination onChange={this.onChange} className="page-demo" />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .page-demo {
    margin-top: 10px;
  }
`
