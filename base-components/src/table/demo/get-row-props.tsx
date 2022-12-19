/**
 * @title 自定义Row/Cell
 * @description 可以重写部分原生属性，比如className style onDoubleClick等。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table } from '@alicloudfe/components'

const dataSource = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
}

const propsConf = {
  className: 'next-myclass',
  style: { background: 'black', color: 'white' },
  onDoubleClick: () => {
    console.log('doubleClicked')
  }
}

const setRowProps = (record, index) => {
  if (index === 2) {
    return propsConf
  }
}

const setCellProps = (rowIndex, colIndex, dataIndex, record) => {
  if (rowIndex === 0 && colIndex === 0) {
    console.log(record)
    return propsConf
  }
}

export default function DemoComponent() {
  const content = (
    <Table
      dataSource={dataSource()}
      rowProps={setRowProps}
      cellProps={setCellProps}
    >
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" dataIndex="time" />
    </Table>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
