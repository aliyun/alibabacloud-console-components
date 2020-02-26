import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'

const generateDataSource = () => {
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
const render = (value, index, record) => {
  return <a>Remove({record.id})</a>
}

const Demo5 = () => {
  const [dataSource, setDataSource] = useState(generateDataSource())

  const [expandedRowIndent, setExpandedRowIndent] = useState(undefined)

  const onSort = (dataIndex, order) => {
    const newDataSource = dataSource.sort(function(a, b) {
      const result = a[dataIndex] - b[dataIndex]
      return order === 'asc' ? (result > 0 ? 1 : -1) : result > 0 ? -1 : 1
    })
    setDataSource(newDataSource)
  }

  const toggleIndent = () => {
    setExpandedRowIndent([2, 1])
  }

  return (
    <div>
      <p>
        <Button onClick={toggleIndent}> Update indent </Button>
      </p>
      <Table
        dataSource={dataSource}
        isZebra={false}
        hasBorder={false}
        onSort={onSort}
        expandedRowRender={record => record.title}
        onRowClick={() => console.log('rowClick')}
        onExpandedRowClick={() => console.log('expandedRowClick')}
        expandedRowIndent={expandedRowIndent}
      >
        <Table.Column title="Id" dataIndex="id" sortable />
        <Table.Column title="Title" dataIndex="title" />
        <Table.Column title="Time" dataIndex="time" />
        <Table.Column cell={render} width={200} />
      </Table>
    </div>
  )
}

export default Demo5

export const demoMeta = {
  zhName: `可展开`,
  zhDesc: '可以通过 `expandedRowRender` 额外渲染行',
}
