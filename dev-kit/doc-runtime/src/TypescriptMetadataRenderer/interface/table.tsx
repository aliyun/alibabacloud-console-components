import React from 'react'
import { Table } from '@alicloud/console-components'
import styled from 'styled-components'

import CodeBlock from '../../CodeBlock'
import { renderMarkdown } from '../../utils/renderMarkdown'

export interface IInterfaceTableRow {
  propertyId: string
  displayName: string
  type: string
  description: string
  defaultValue: string
}

export interface IInterfaceTableProps {
  properties: IInterfaceTableRow[]
}

const STable = styled(Table)`
  thead tr th:nth-of-type(2) {
    /* 限制Type列的宽度 */
    width: 220px;
  }
  thead tr th:nth-of-type(4) {
    /* 限制Default Value列的宽度 */
    min-width: 120px;
  }
  margin-bottom: 28px;
`

const InterfaceTable: React.FC<IInterfaceTableProps> = ({ properties }) => {
  return (
    <STable dataSource={properties}>
      <Table.Column title="属性名" cell={renderName} />
      <Table.Column title="类型" cell={renderType} />
      <Table.Column title="说明" cell={renderDescription} />
      <Table.Column title="默认值" cell={renderDefaultValue} />
    </STable>
  )
}

export default InterfaceTable

const TypeCell = styled.div`
  max-width: 180px;
  overflow: auto;
  padding: 8px 0;
  pre {
    vertical-align: bottom;
    code {
      vertical-align: bottom;
    }
  }
`

function renderType(value: never, index: number, row: IInterfaceTableRow) {
  return (
    <TypeCell>
      {/* {row.type} */}
      <CodeBlock
        language="tsx"
        style={{
          display: 'inline-block',
          padding: '0',
          margin: '0',
          background: 'none',
        }}
      >
        {row.type}
      </CodeBlock>
    </TypeCell>
  )
}

function renderDescription(
  value: never,
  index: number,
  row: IInterfaceTableRow
) {
  return renderMarkdown(row.description)
}

function renderDefaultValue(
  value: never,
  index: number,
  row: IInterfaceTableRow
) {
  return renderMarkdown(row.defaultValue)
}

function renderName(value: never, index: number, row: IInterfaceTableRow) {
  return <span id={row.propertyId}>{row.displayName}</span>
}
