import React from 'react'
import { Table } from '@alicloud/console-components'
import { renderMarkdown } from '../APITable'

const RenderTableFromFusion: React.FC<{
  data: {
    tableData: {
      [k: string]: string
    }[]
    properties: string[]
  }
}> = ({ data }) => {
  const { tableData, properties } = data
  return (
    <Table dataSource={tableData}>
      {properties.filter(Boolean).map(property => (
        <Table.Column
          title={property}
          dataIndex={property}
          cell={markdownCell}
        />
      ))}
    </Table>
  )
}

export default RenderTableFromFusion

function markdownCell(value: string) {
  return renderMarkdown(value)
}
