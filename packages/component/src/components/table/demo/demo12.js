import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'

const onRowClick = function(record, index, e) {
  console.log(record, index, e)
}
const generateDataSource = j => {
  const result = []
  for (let i = 0; i < j; i++) {
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

const Demo12 = () => {
  const [dataSource, setDataSource] = useState(generateDataSource(200))

  const onClick = () => {
    setDataSource(generateDataSource(4))
  }

  return (
    <div>
      <p>
        <Button onClick={onClick}>Reduce count</Button>
      </p>
      <Table
        dataSource={dataSource}
        onRowClick={onRowClick}
        fixedHeader
        maxBodyHeight={400}
      >
        <Table.Column title="Title1" dataIndex="id" width={140} />
        <Table.ColumnGroup title="Group2-7">
          <Table.Column title="Title2" dataIndex="id" lock width={140} />
          <Table.Column title="Title3" dataIndex="title.name" width={200} />
          <Table.ColumnGroup title="Group4-7">
            <Table.Column title="Title4" dataIndex="title.name" width={400} />
            <Table.Column title="Title5" dataIndex="title.name" width={200} />
            <Table.ColumnGroup title="Group6-7">
              <Table.Column title="Title6" dataIndex="title.name" width={400} />
              <Table.Column title="Title7" dataIndex="title.name" width={200} />
            </Table.ColumnGroup>
          </Table.ColumnGroup>
        </Table.ColumnGroup>
        <Table.ColumnGroup>
          <Table.Column title="Time" dataIndex="time" width={500} />
          <Table.Column cell={render} width={200} lock="right" />
        </Table.ColumnGroup>
      </Table>
    </div>
  )
}

export default Demo12

export const demoMeta = {
  zhName: `多表头`,
  zhDesc: `多个表头`,
}
