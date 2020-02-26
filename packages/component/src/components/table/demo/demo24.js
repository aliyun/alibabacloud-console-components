import React, { useState, useEffect } from 'react'
import { Table, Input } from '@alicloud/console-components'

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
const EditablePane = props => {
  const { defaultTitle } = props
  const [cellTitle, setCellTitle] = useState(defaultTitle)
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    setCellTitle(defaultTitle)
  }, [defaultTitle])

  const onKeyDown = e => {
    const { keyCode } = e
    // Stop bubble up the events of keyUp, keyDown, keyLeft, and keyRight
    if (keyCode > 36 && keyCode < 41) {
      e.stopPropagation()
    }
  }

  const onBlur = e => {
    setCellTitle(e.target.value)
    setEditable(false)
  }

  const onDblClick = () => {
    setEditable(true)
  }

  if (editable) {
    return (
      <Input
        autoFocus
        defaultValue={cellTitle}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
    )
  }
  return <span onDoubleClick={onDblClick}>{cellTitle}</span>
}

const Demo = () => {
  const renderCell = (value, index, record) => {
    return <EditablePane defaultTitle={value} />
  }

  return (
    <div>
      <Table dataSource={result}>
        <Table.Column title="Id" dataIndex="id" />
        <Table.Column title="Title" dataIndex="title.name" cell={renderCell} />
        <Table.Column title="Time" dataIndex="time" />
      </Table>
    </div>
  )
}

export default Demo

export const demoMeta = {
  zhName: `可编辑的表格`,
  zhDesc: `单元格可编辑的表格（双击单元格进行编辑）`,
}
