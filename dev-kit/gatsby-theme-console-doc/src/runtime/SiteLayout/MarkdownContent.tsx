import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from '@alicloud/gatsby-plugin-mdx-fork/mdx-renderer'
import markdownComps from '../MarkdownComponents'
import { usePageCtx } from './context'
import DocTags from './utils/DocTags'

/* eslint-disable @typescript-eslint/camelcase */

const components = {
  ...markdownComps,
}

const MarkdownContent: React.FC = () => {
  const pageCtx = usePageCtx()
  if (pageCtx.pageMeta.type !== 'doc') return null
  return (
    <MDXProvider components={components}>
      <DocTags tags={pageCtx.pageMeta.tags} />
      <MDXRenderer>{pageCtx.pageMeta.mdxBody}</MDXRenderer>
    </MDXProvider>
  )
}

export default MarkdownContent
