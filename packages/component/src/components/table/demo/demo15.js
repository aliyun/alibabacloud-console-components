import React, { useState } from 'react'
import { Table } from '@alicloud/console-components'

const dataSource = j => {
  const result = []
  for (let i = 0; i < j; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: `100306660940${i}`,
      time: 2000 + i,
      index: i,
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a>Remove({record.id})</a>
}

const Demo15 = () => {
  const [scrollToRow, setScrollToRow] = useState(20)

  const onBodyScroll = start => {
    setScrollToRow(start)
  }

  return (
    <Table
      dataSource={dataSource(1000)}
      maxBodyHeight={400}
      useVirtual
      scrollToRow={scrollToRow}
      onBodyScroll={onBodyScroll}
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

export default Demo15

export const demoMeta = {
  zhName: `虚拟滚动`,
  zhDesc: '使用 `useVirtual` 开启虚拟滚动，`scrollToRow` 滚动到指定列',
}
