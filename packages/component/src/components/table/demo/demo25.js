import React, { useState } from 'react'
import { Table } from '@alicloud/console-components'
import _ from 'lodash'

const result = [
  {
    id: '001',
    time: 1951,
    title: { name: 'The Old Man and the Sea' },
  },
  {
    id: '002',
    time: 1925,
    title: { name: 'the great gatsby' },
  },
  {
    id: '003',
    time: 1719,
    title: { name: 'The adventures of Robinson Crusoe' },
  },
]
const Demo = () => {
  const [dataSource, setDataSource] = useState(result)

  const onRemove = id => {
    let index = -1
    dataSource.forEach((item, i) => {
      if (item.id === id) {
        index = i
      }
    })
    if (index !== -1) {
      const newDataSource = _.cloneDeep(dataSource)
      newDataSource.splice(index, 1)
      setDataSource(newDataSource)
    }
  }

  const renderOper = (value, index, record) => {
    return (
      <a
        onClick={() => {
          onRemove(record.id)
        }}
      >
        Remove({record.id})
      </a>
    )
  }

  return (
    <div>
      <Table dataSource={dataSource}>
        <Table.Column title="Id" dataIndex="id" />
        <Table.Column title="Title" dataIndex="title.name" />
        <Table.Column title="Time" dataIndex="time" />
        <Table.Column title="operate" cell={renderOper} />
      </Table>
    </div>
  )
}

export default Demo

export const demoMeta = {
  zhName: `无障碍`,
  zhDesc: `通过键盘方向键浏览表格。`,
}
