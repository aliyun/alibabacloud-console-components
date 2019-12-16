import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'
import _ from 'lodash'

const onRowClick = function(record, index, e) {
  console.log(record, index, e)
}

const generateDataSource = () => {
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

const Demo9 = () => {
  const [dataSource, setDataSource] = useState(generateDataSource())
  const onAdd = () => {
    const newDataSource = dataSource.concat([
      {
        title: {
          name: 'Quotation for 1PCS Nano controller compatible',
        },
        id: Date.now(),
        time: 2000,
      },
    ])
    setDataSource(newDataSource)
  }

  const onRemove = id => {
    let index = -1
    const cloneDataSource = _.cloneDeep(dataSource)
    cloneDataSource.forEach((item, i) => {
      if (item.id === id) {
        index = i
      }
    })
    if (index !== -1) {
      cloneDataSource.splice(index, 1)
      setDataSource(cloneDataSource)
    }
  }

  const renderOper = (value, index, record) => {
    return <a onClick={() => onRemove(record.id)}>Remove({record.id})</a>
  }
  return (
    <div>
      <p>
        <Button onClick={onAdd}>Add Item</Button>
      </p>
      <Table dataSource={dataSource} onRowClick={onRowClick}>
        <Table.Column title="Id" dataIndex="id" />
        <Table.Column title="Title" dataIndex="title.name" />
        <Table.Column title="Time" dataIndex="time" />
        <Table.Column cell={renderOper} width="20%" title="操作" />
      </Table>
    </div>
  )
}

export default Demo9

export const demoMeta = {
  zhName: `增删改查`,
  zhDesc: `演示对表格的增删改查`,
}
