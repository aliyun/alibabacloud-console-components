import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'
import styled from 'styled-components'

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

const Demo17 = () => {
  const [className, setClassName] = useState('')

  const [isZebra, setIsZebra] = useState(false)

  const [hasBorder, setHasBorder] = useState(false)

  const [align, setAlign] = useState('left')

  const toggleZebra = () => {
    setIsZebra(!isZebra)
  }

  const toggleBorder = () => {
    setHasBorder(!hasBorder)
  }

  const makeBeauty = () => {
    setClassName('beauty')
  }

  const makeAlign = () => {
    setAlign('right')
  }

  return (
    <SWrapper>
      <p>
        <Button onClick={toggleZebra}> Toggle zebra </Button>
        &nbsp;
        <Button onClick={toggleBorder}>Toggle border</Button>
        &nbsp;
        <Button onClick={makeBeauty}>Make second column beauty</Button>
        &nbsp;
        <Button onClick={makeAlign}>Make first column align right</Button>
        &nbsp;
      </p>
      <Table
        dataSource={generateDataSource()}
        isZebra={isZebra}
        hasBorder={hasBorder}
      >
        <Table.Column title="Id" dataIndex="id" align={align} />
        <Table.Column title="Title" dataIndex="title" className={className} />
        <Table.Column title="Time" dataIndex="time" />
        <Table.Column cell={render} width={200} />
      </Table>
    </SWrapper>
  )
}

export const demoMeta = {
  zhName: `样式`,
  zhDesc: `自定义表格边框`,
}

export default Demo17

const SWrapper = styled.span`
  .beauty {
    background: #f7f7f7;
  }
`
