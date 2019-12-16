import React from 'react'
import { Table, Loading, Icon } from '@alicloud/console-components'

const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
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
  return <a href="javascript:;">Remove({record.id})</a>
}

const indicator = (
  <div>
    <Icon type="loading" />
  </div>
)

const CustomLoading = props => <Loading indicator={indicator} {...props} />

const Demo = () => (
  <Table dataSource={dataSource()} loading loadingComponent={CustomLoading}>
    <Table.Column title="Id" dataIndex="id" />
    <Table.Column title="Title" dataIndex="title.name" />
    <Table.Column title="Time" dataIndex="time" />
    <Table.Column cell={render} />
  </Table>
)

export default Demo

export const demoMeta = {
  zhName: `自定义 Loading 组件`,
  zhDesc: '',
}
