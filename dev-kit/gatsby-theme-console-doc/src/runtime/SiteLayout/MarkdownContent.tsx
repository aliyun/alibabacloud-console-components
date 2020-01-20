import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import markdownComps from '../MarkdownComponents'
import { usePageCtx } from './context'

/* eslint-disable @typescript-eslint/camelcase */

const components = {
  ...markdownComps,
}

const MarkdownContent: React.FC = () => {
  const pageCtx = usePageCtx()
  if (pageCtx.pageMeta.type !== 'doc') return null
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{pageCtx.pageMeta.mdxBody}</MDXRenderer>
    </MDXProvider>
  )
}

export default MarkdownContent
