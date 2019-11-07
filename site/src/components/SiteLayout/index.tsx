import React from 'react'
import { graphql } from 'gatsby'
import AppLayout from '@alicloud/console-components-app-layout'
import Page from '@alicloud/console-components-page'
import '@alicloud/console-components/dist/wind.css'
import TopBar, { TOP_BAR_HEIGHT } from './TopBar'
import SideBar from './SideBar'
import MarkdownWrapper from './MarkdownWrapper'

export interface IPageMeta {
  /**
   * 文章名称，CamelCase
   */
  name: string
  /**
   * 文章名称，中文
   */
  zhName: string
  type: 'biz-component' | 'base-component' | 'guide'
  mdxId: string
  path: string
}

interface ISiteLayoutProps {
  pageContext: {
    pageMeta: IPageMeta
    siteMeta: {
      bizComponents: IPageMeta[]
      baseComponents: IPageMeta[]
      guides: IPageMeta[]
    }
  }
  data: {
    mdx: {
      body: string
    }
  }
}

const SiteLayout: React.FC<ISiteLayoutProps> = ({ data, pageContext }) => {
  // console.log(data, pageContext)
  const {
    mdx: { body },
  } = data
  const {
    siteMeta: { bizComponents, baseComponents, guides },
    pageMeta: { type, path },
  } = pageContext

  let sidebarHeader: string
  let sidebarList: IPageMeta[]

  switch (type) {
    case 'biz-component':
      sidebarHeader = '业务组件'
      sidebarList = bizComponents
      break
    case 'base-component':
      sidebarHeader = '基础组件'
      sidebarList = baseComponents
      break
    case 'guide':
      sidebarHeader = '开发指南'
      sidebarList = guides
      break
    default:
      throw new Error(`未知的文档类型：${type}`)
  }

  return (
    <>
      <TopBar searchData={{ bizComponents, baseComponents, guides }} />
      <AppLayout
        nav={
          <SideBar
            header={sidebarHeader}
            list={sidebarList}
            currentPath={path}
          />
        }
        adjustHeight={TOP_BAR_HEIGHT}
      >
        <Page>
          <Page.Content>
            <MarkdownWrapper>{body}</MarkdownWrapper>
          </Page.Content>
        </Page>
      </AppLayout>
    </>
  )
}

export default SiteLayout

export const pageQuery = graphql`
  query BlogPostQuery($mdxId: String) {
    mdx(id: { eq: $mdxId }) {
      id
      body
    }
  }
`
