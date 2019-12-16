import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'

const generateDataSource = length => {
  const result = []
  for (let i = 0; i < length; i++) {
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

const Demo10 = () => {
  const [sticky, setSticky] = useState(false)

  const [lock, setLock] = useState(false)

  const [dataSource, setDataSource] = useState(generateDataSource(50))

  const onSwitch = tag => {
    switch (tag) {
      case 'sticky':
        setSticky(true)
        break
      case 'lock':
        setLock(true)
        break
      case 'dataSource':
        setDataSource(dataSource.length > 0 ? [] : generateDataSource(50))
        break
      default:
        break
    }
  }

  return (
    <div>
      <p>
        <Button onClick={() => onSwitch('sticky')}>enable sticky</Button> &nbsp;
        <Button onClick={() => onSwitch('lock')}>enable lock</Button> &nbsp;
        <Button onClick={() => onSwitch('dataSource')}>
          toggle dataSource
        </Button>
      </p>
      <Table dataSource={dataSource} fixedHeader stickyHeader={sticky}>
        <Table.Column title="Id" dataIndex="id" width={200} lock={lock} />
        <Table.Column title="Title" dataIndex="title.name" width={200} />
        <Table.Column title="Time" dataIndex="time" width={200} />
      </Table>
    </div>
  )
}

export default Demo10

export const demoMeta = {
  zhName: `固定表头`,
  zhDesc: `表格可以固定表头,支持sticky方式`,
}
