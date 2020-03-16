import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import markdownComps0 from '@alicloud/console-components-lib-documenter/src/runtime/MarkdownComponents'
import { MdxDocumentLayout } from '@alicloud/console-components-lib-documenter/src/runtime/MdxWrapper'
import { usePageCtx } from './context'
import DocTags from './utils/DocTags'
import { ITocHeading } from '@alicloud/console-components-lib-documenter/src/runtime/MdxWrapper/TableOfContent'

interface IWrapperProps {
  frontmatter: any
  _frontmatter: any
  tocHeadings: ITocHeading[]
}

const Wrapper: React.FC<IWrapperProps> = ({ children, ...props }) => {
  const frontmatter = {
    ...props.frontmatter,
    ...props._frontmatter,
  }
  return (
    <MdxDocumentLayout
      tocHeadings={props.tocHeadings}
      frontmatter={frontmatter}
      autoPadding
      scrollContainer=".windcc-app-layout__content"
    >
      {children}
    </MdxDocumentLayout>
  )
}

const markdownComps = {
  ...markdownComps0,
  wrapper: Wrapper,
}

const MarkdownContent: React.FC = () => {
  const pageCtx = usePageCtx()
  if (pageCtx.pageMeta.type !== 'doc') return null
  return (
    <MDXProvider components={markdownComps}>
      <DocTags tags={pageCtx.pageMeta.tags} />
      <MDXRenderer>{pageCtx.pageMeta.mdxBody}</MDXRenderer>
    </MDXProvider>
  )
}

export default MarkdownContent
