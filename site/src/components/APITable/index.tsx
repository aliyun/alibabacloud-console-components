import React from 'react'
import { Table } from '@alicloud/console-components'
import styled from 'styled-components'

import unified from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import CodeBlock from '../CodeBlock'
import mdCodeComps from '../MarkdownComponents/code'

const { inlineCode: InlineCode } = mdCodeComps

export interface IAPITableRow {
  id: string
  displayName: string
  type: string
  description: string
  defaultValue: string
}

export interface IAPITableProps {
  rows: IAPITableRow[]
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

const APITable: React.FC<IAPITableProps> = ({ rows }) => {
  // console.log(rows)
  return (
    <STable dataSource={rows}>
      <Table.Column title="参数" cell={renderName} />
      <Table.Column title="类型" cell={renderType} />
      <Table.Column title="说明" cell={renderDescription}></Table.Column>
      <Table.Column title="默认值" cell={renderDefaultValue}></Table.Column>
    </STable>
  )
}

export default APITable

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

function renderType(value: never, index: number, row: IAPITableRow) {
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

const SParagraph = styled.p`
  margin: 0;
`

export function renderMarkdown(markdown: string) {
  const Comp = (unified()
    .use(parse)
    .use(remark2rehype, { allowDangerousHTML: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,

      components: {
        code: ({ className = '', children }: any) => {
          const language = className.split('-')[1] || ''
          let code = children[0] || ''
          // 删除末尾的多个空行
          code = code.replace(/\n+$/g, '\n')
          if (language) return <CodeBlock language={language}>{code}</CodeBlock>
          return <InlineCode>{code}</InlineCode>
        },
        p: SParagraph,
      },
    })
    .processSync(markdown).contents as unknown) as React.ComponentType
  return Comp
}

function renderDescription(value: never, index: number, row: IAPITableRow) {
  return renderMarkdown(row.description)
}

function renderDefaultValue(value: never, index: number, row: IAPITableRow) {
  return renderMarkdown(row.defaultValue)
}

function renderName(value: never, index: number, row: IAPITableRow) {
  return <span id={row.id}>{row.displayName}</span>
}
