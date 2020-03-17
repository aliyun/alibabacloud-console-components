import React, { useContext, useLayoutEffect, useMemo } from 'react'
import { pageCtx } from './context'
import { pageCtxSetterCtx, IPageContext } from './index'
import { buildTagIndex } from './utils/buildTagIndex'
import MarkdownContent from './MarkdownContent'
import DynamicDoc from './DynamicDoc'
import DocPreview from './DocPreview'
import NotFound from './pages/404'
import IndexPage from './pages/indexPage'
import styled from 'styled-components'

interface PageInfo {
  pageContext: IPageContext
  location: any
}

// <PageElement key={xxxx}> 会被gatsby传给的SiteLayout组件的props.children
// gatsby会让key在页面跳转时发生改变，避免意料之外的vdom复用
// https://www.gatsbyjs.org/packages/gatsby-plugin-layout/

const PageElement: React.FC<PageInfo> = props => {
  const pageCtxSetter = useContext(pageCtxSetterCtx)
  const pageContext = useMemo(
    () => ({
      ...props.pageContext,
      location: props.location,
      tagIndex: buildTagIndex(props.pageContext.siteMeta.categories),
    }),
    [props.pageContext, props.location]
  )

  useLayoutEffect(() => {
    pageCtxSetter(pageContext)
  }, [pageContext])

  return (
    <pageCtx.Provider value={pageContext}>
      <ScScrollCtn>
        <ScContentCtn>
          {(() => {
            if (pageContext.pageMeta.type === 'doc') {
              return <MarkdownContent />
            }
            if (pageContext.pageMeta.type === 'dynamic-doc') {
              return <DynamicDoc />
            }
            if (pageContext.pageMeta.type === 'index-page') {
              return <IndexPage />
            }
            if (pageContext.pageMeta.type === 'doc-preview') {
              return <DocPreview />
            }
            return <NotFound />
          })()}
        </ScContentCtn>
      </ScScrollCtn>
    </pageCtx.Provider>
  )
}

export default PageElement

const ScScrollCtn = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

const ScContentCtn = styled.div`
  padding: 16px 24px 0;
`
