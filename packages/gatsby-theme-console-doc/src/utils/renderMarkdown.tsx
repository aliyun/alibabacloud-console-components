import React from 'react'

import unified from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import styled from 'styled-components'
import CodeBlock from '../runtime/CodeBlock'
import mdCodeComps from '../runtime/MarkdownComponents/code'

const { inlineCode: InlineCode } = mdCodeComps

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
