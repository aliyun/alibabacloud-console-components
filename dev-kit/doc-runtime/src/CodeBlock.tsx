import React from 'react'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('ts', ts)
SyntaxHighlighter.registerLanguage('typescript', ts)
SyntaxHighlighter.registerLanguage('tsx', tsx)

const SyntaxHighlighterStyle: React.CSSProperties = {
  padding: '16px',
  overflow: 'auto',
  // fontSize: '85%',
  lineHeight: '1.45',
  backgroundColor: '#f6f8fa',
  borderRadius: '3px',
}

const CodeBlock: React.FC<{
  language: 'js' | 'javascript' | 'jsx' | 'ts' | 'typescript' | 'tsx'
  style?: React.CSSProperties
  className?: string
}> = ({ language, style, children, className }) => {
  let actualLanguage = language
  if (!actualLanguage && typeof className === 'string') {
    // try to infer language from classname like: 'language-javascript'
    for (const classN of className.split(' ')) {
      const match = classN.match(/^language-(.*)$/)
      if (match) {
        actualLanguage = match[1] as any
        break
      }
    }
  }

  return (
    <SyntaxHighlighter
      language={actualLanguage}
      style={prism}
      customStyle={{ ...SyntaxHighlighterStyle, ...style }}
      className={className}
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default CodeBlock
