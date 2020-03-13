import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import mdComps from '../MarkdownComponents'
import { ITocHeading } from './TableOfContent'
import Layout from './Layout'
import { docMetaCtx } from '../utils/context'

/** lib-publisher打包mdx文档得到的模块 */
export interface IOriginalMdxModule {
  /** yaml格式的frontmatter */
  _frontMatter: any
  /** export const frontmatter... 格式的 frontmatter */
  frontmatter: any
  /** 工具提取的heading */
  tocHeadings: any
  /** 文档渲染组件 */
  default: React.FC
}

export interface IWrappedMdxModule {
  default: React.FC<IMdxDocProps>
  frontmatter: any
  tocHeadings: any
}

export interface IMdxDocProps {
  /** 动态文档的加载信息 */
  pkgInfo?: {
    prodPkgName: string
    actualLoadPkgName: string
    actualLoadPkgVersion: string
  }
  /** 本地开发环境下有一些特殊的行为，比如codesanbox不能使用 */
  mode?: 'local-dev'
  autoPadding?: boolean
}

export interface IMdxDocCtx extends IMdxDocProps {
  frontmatter: any
  tocHeadings: ITocHeading[]
}

const components = {
  ...mdComps,
}

export function wrapMdxModule(
  mdxExport: IOriginalMdxModule
): IWrappedMdxModule {
  const frontmatter = getFrontmatter(mdxExport)
  const tocHeadings = mdxExport.tocHeadings
  const DocComp = mdxExport.default
  const WrappedDocComp: React.FC<IMdxDocProps> = props => {
    const ctxVal: IMdxDocCtx = {
      ...props,
      frontmatter: frontmatter,
      tocHeadings: tocHeadings,
    }
    return (
      <MDXProvider components={components}>
        <docMetaCtx.Provider value={ctxVal}>
          <Layout>
            <DocComp />
          </Layout>
        </docMetaCtx.Provider>
      </MDXProvider>
    )
  }
  return {
    default: WrappedDocComp,
    frontmatter,
    tocHeadings,
  }
}

export function getFrontmatter(mdxExport: IOriginalMdxModule) {
  const {
    // 在markdown顶部通过yaml来定义的元数据
    _frontMatter: classicFrontmatter = {},
    // 使用mdx的export const frontmatter = {}来定义的元数据
    frontmatter: exportFrontmatter = {},
  } = mdxExport
  return {
    ...classicFrontmatter,
    ...exportFrontmatter,
  }
}
