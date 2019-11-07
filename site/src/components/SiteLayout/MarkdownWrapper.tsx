import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import RenderTableFromFusion from '../RenderTableFromFusion'
import markdownComps from '../MarkdownComponents'

/* eslint-disable @typescript-eslint/camelcase */

const components = {
  Render_Table_From_Fusion: RenderTableFromFusion,
  ...markdownComps,
}

const MarkdownWrapper: React.FC<{ children: string }> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MarkdownWrapper
