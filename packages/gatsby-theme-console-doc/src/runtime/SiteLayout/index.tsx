import React from 'react'
import AppLayout from '@alicloud/console-components-app-layout'
import Page from '@alicloud/console-components-page'
import '@alicloud/console-components/dist/wind.css'
import styled from 'styled-components'
import TopBar, { TOP_BAR_HEIGHT } from './TopBar'
import SideBar from './SideBar'
import MarkdownContent from './MarkdownContent'
import { pageCtx } from './context'
import NotFound from './pages/404'
import IndexPage from './pages/indexPage'
import SEO from '../SEO'

export interface IDocPageMeta {
  // 是普通文档还是404页面
  type: 'doc'
  /**
   * 文章名称， kebab-case
   * https://lodash.com/docs/4.17.15#kebabCase
   * 从 frontmatter 获得
   */
  name: string
  /**
   * 文章名称，中文
   * 从 frontmatter 获得
   */
  zhName: string
  /**
   * 文章类别
   * 从 frontmatter 获得
   */
  category: string
  mdxBody: string
  // url路径
  path: string
  // 文档md文件的路径（相对于contentRootDir）
  markdownFilePath: string
  // 左侧导航栏的数据
  sideNav: {
    navCategories: { categoryName: string }[]
    header: string
  }
}

export type IPageMeta = IDocPageMeta | { type: '404' } | { type: 'indexPage' }

export interface IPageContext {
  pageMeta: IPageMeta
  siteMeta: {
    categories: {
      name: string
      zhName: string
      docs: IDocPageMeta[]
    }[]
    topNav: { text: string; href: string }[]
    // 入口路径
    primaryPath: string
    // 标题模板为 pageName · siteName
    siteName: string
    // 应用描述
    description?: string
  }
}

const SiteLayout: React.FC<{
  pageContext: IPageContext
  data: {
    mdx: {
      body: string
    }
  }
}> = ({ pageContext }) => {
  return (
    <pageCtx.Provider value={pageContext}>
      <SEO />
      <TopBar />
      <SAppLayout
        nav={pageContext.pageMeta.type === 'doc' ? <SideBar /> : null}
        adjustHeight={TOP_BAR_HEIGHT}
        navCollapsible={false}
      >
        <Page>
          <Page.Content>
            {(() => {
              if (pageContext.pageMeta.type === 'doc') {
                return <MarkdownContent />
              }
              if (pageContext.pageMeta.type === 'indexPage') {
                return <IndexPage />
              }
              return <NotFound />
            })()}
          </Page.Content>
        </Page>
      </SAppLayout>
    </pageCtx.Provider>
  )
}

export default SiteLayout

const SAppLayout = styled(AppLayout)`
  .windcc-app-layout__nav {
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #dedede;
    }

    ::-webkit-scrollbar-thumb {
      background: #666;
    }
  }
`
