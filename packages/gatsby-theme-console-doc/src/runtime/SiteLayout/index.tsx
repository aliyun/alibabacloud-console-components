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
import DynamicDoc from './DynamicDoc'

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
  /**
   * 文章在左侧导航栏的排序，按照[sort, name]来排序
   * 从 frontmatter 获得(用户可不填，默认为1)
   */
  sort: number | null
  /**
   * 文章在菜单中的显示文字
   */
  labelInMenu?: string
  mdxBody: string
  // url路径
  path: string
  // 文档md文件的路径（相对于contentRootDir）
  markdownFilePath: string
  /** 左侧导航菜单的配置 */
  sideNav: {
    /** 左侧导航菜单的标题 */
    header: string
    /** 左侧导航菜单的导航内容 */
    navCategories: { categoryName: string }[]
  }
}

export interface IDynamicDocMeta {
  type: 'dynamic-doc'
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
  /**
   * 文档资源加载地址：
   * https://www.unpkg.com/${packageName}@${packageVersion}/dist/_doc.system.js
   * 或者
   * https://cdn.jsdelivr.net/npm/${packageName}@${packageVersion}/dist/_doc.system.js
   */
  packageName: string
  packageVersion?: string
  /**
   * 文章在菜单中的显示文字
   */
  labelInMenu?: string
  // url路径
  path: string
  /** 左侧导航菜单的配置 */
  sideNav: {
    /** 左侧导航菜单的标题 */
    header: string
    /** 左侧导航菜单的导航内容 */
    navCategories: { categoryName: string }[]
  }
}

export type IPageMeta =
  | IDocPageMeta
  | IDynamicDocMeta
  | { type: '404' }
  | { type: 'indexPage' }

export interface ISiteMeta {
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

export interface IPageContext {
  pageMeta: IPageMeta
  siteMeta: ISiteMeta
}

const SiteLayout: React.FC<{
  pageContext: IPageContext
}> = ({ pageContext }) => {
  console.log('pageContext', pageContext)
  return (
    <pageCtx.Provider value={pageContext}>
      <SEO />
      <TopBar />
      <SAppLayout
        nav={<SideBar />}
        adjustHeight={TOP_BAR_HEIGHT}
        navCollapsible={false}
      >
        <Page>
          <Page.Content className="console-doc-content-body">
            {(() => {
              if (pageContext.pageMeta.type === 'doc') {
                return <MarkdownContent />
              }
              if (pageContext.pageMeta.type === 'dynamic-doc') {
                return <DynamicDoc />
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
