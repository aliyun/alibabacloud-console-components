import React, { useState } from 'react'
import AppLayout from '@alicloud/console-components-app-layout'
import '@alicloud/console-components/dist/wind.css'
import styled from 'styled-components'
import TopBar, { TOP_BAR_HEIGHT } from './TopBar'
import SideBar from './SideBar'
import { pageCtx } from './context'
import SEO from '../SEO'
import { ITagIndex } from './utils/buildTagIndex'
import { useSearchPages } from './SearchPages'

export interface IDocPageMeta {
  // 是普通文档还是404页面
  type: 'doc' | 'dynamic-doc'
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
  /** url路径 */
  path: string
  /**
   * 文章在左侧导航栏的排序，按照[sort, name]来排序
   * 从 frontmatter 获得(用户可不填，默认为1)
   */
  sort?: number
  /**
   * 文章在菜单中的显示文字
   */
  labelInMenu?: string
  /** 左侧导航菜单的配置 */
  sideNav: {
    /** 左侧导航菜单的标题 */
    header: string
    /** 左侧导航菜单的导航内容 */
    navCategories: {
      categoryName?: string
      tagSelector?: any
      label?: string
      flat?: boolean
      sortByTag?: string
    }[]
  }
  tags?: { [tagName: string]: string }
}

export interface IStaticDocMeta extends IDocPageMeta {
  type: 'doc'
  mdxBody: string
  // 文档md文件的路径（相对于contentRootDir）
  markdownFilePath: string
  // url路径
  path: string
}
export interface IDynamicDocMeta extends IDocPageMeta {
  type: 'dynamic-doc'
  /**
   * 文档资源加载地址：
   * https://www.unpkg.com/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js
   * 或者
   * https://cdn.jsdelivr.net/npm/${actualLoadPkgName}@${actualLoadPkgVersion}/dist/_doc.system.js
   *
   * 其中，文档demo对prodPkgName的依赖被重定向到actualLoadPkgName
   */
  prodPkgName: string
  actualLoadPkgName?: string
  actualLoadPkgVersion?: string
}

export type INormalPageMeta = IStaticDocMeta | IDynamicDocMeta

export type IPageMeta =
  | INormalPageMeta
  | { type: '404' }
  | { type: 'index-page' }
  | { type: 'doc-preview' }

export interface ISiteMeta {
  categories: {
    name: string
    zhName: string
    docs: INormalPageMeta[]
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
  tagIndex: ITagIndex
  location: any
}

export const pageCtxSetterCtx = React.createContext<
  React.Dispatch<React.SetStateAction<IPageContext | null>>
>(() => {})

const SiteLayout: React.FC<{}> = ({ children }) => {
  const [pageContext, setPageContext] = useState<IPageContext | null>(null)
  const wrap = useSearchPages(pageContext?.siteMeta.categories)
  return wrap(
    <pageCtxSetterCtx.Provider value={setPageContext}>
      <pageCtx.Provider value={pageContext}>
        {pageContext && <SEO />}
        <TopBar />
        <SAppLayout
          nav={<SideBar />}
          adjustHeight={TOP_BAR_HEIGHT}
          navCollapsible={false}
        >
          {children}
        </SAppLayout>
      </pageCtx.Provider>
    </pageCtxSetterCtx.Provider>
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
