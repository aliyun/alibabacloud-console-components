import React, { Component, useState } from 'react'
import { Table, Pagination } from '@alicloud/console-components'
import styled from 'styled-components'

const generateDataSource = j => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      id: 100306660940 + i + j,
      time: 2000 + j,
    })
  }
  return result
}
const render = (value, index, record) => {
  return <a>Remove({record.id})</a>
}

const Demo13 = () => {
  const [dataSource, setDataSource] = useState(generateDataSource(1))
  const [loading, setLoading] = useState(false)

  const onChange = currentPage => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDataSource(generateDataSource(currentPage))
    }, 200)
  }

  return (
    <div>
      <Table dataSource={dataSource} loading={loading}>
        <Table.Column title="Id1" dataIndex="id" width={140} />
        <Table.Column title="Time" dataIndex="time" width={500} />
        <Table.Column cell={render} width={200} />
      </Table>
      <SPagination onChange={onChange} />
    </div>
  )
}

export default Demo13

export const demoMeta = {
  zhName: `分页`,
  zhDesc: `与分页结合`,
}

const SPagination = styled(Pagination)`
  margin-top: 10px;
`
