import React, { Component, useState, useEffect } from 'react'
import { Table, Button } from '@alicloud/console-components'

const onRowClick = function(record, index, e) {
  console.log(record, index, e)
}
const generateDataSource = () => {
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

const initCols = [
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
]

const Demo14 = () => {
  const [dataSource, setDataSource] = useState([])

  const [loading, setLoading] = useState(true)

  const [cols, setCols] = useState(initCols)

  useEffect(() => {
    setTimeout(() => {
      setDataSource(generateDataSource())
      setLoading(false)
    })
  }, [])

  const reduceCol = () => {
    setCols([
      <Table.Column
        title="Title"
        dataIndex="title.name"
        width={400}
        key="name1"
        lock
      />,
      <Table.Column title="Time" dataIndex="time" width={100} key="time" />,
    ])
  }

  return (
    <div>
      <p>
        <Button onClick={reduceCol}>Reduce Cols</Button>
      </p>
      <Table
        dataSource={dataSource}
        onRowClick={onRowClick}
        fixedHeader
        loading={loading}
      >
        <Table.Column
          title="Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id-Id"
          dataIndex="id"
          lock
          width={140}
        />
        {cols}
        <Table.Column cell={render} width={200} />
      </Table>
    </div>
  )
}

export default Demo14

export const demoMeta = {
  zhName: `锁列`,
  zhDesc: `演示表格锁列的功能`,
}
