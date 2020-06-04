import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import mdComps from '../MarkdownComponents'
import Layout from './Layout'
import { docMetaCtx } from '../utils/context'
import type { IDemoInfo } from '../DemoRenderer2'

/** lib-publisher打包mdx文档得到的模块 */
export interface IOriginalMdxModule {
  /** yaml格式的frontmatter */
  _frontMatter: any
  /** export const frontmatter... 格式的 frontmatter */
  frontmatter: any
  /** 文档渲染组件 */
  default: React.FC
}

export interface IWrappedMdxModule {
  default: React.FC<IMdxDocProps>
  frontmatter: any
}

export interface IMdxDocProps {
  /** 动态文档的加载信息 */
  // pkgInfo?: {
  //   prodPkgName: string
  //   actualLoadPkgName: string
  //   actualLoadPkgVersion: string
  // }

  /** 本地开发环境下有一些特殊的行为，比如codesanbox不能使用 */
  mode?: 'local-dev'
  autoPadding?: boolean
  /** 指定哪个容器是负责文档滚动，用于计算TOC的激活标题 */
  scrollContainer?: string
  changeDemoInfo?: (demoInfo: IDemoInfo) => IDemoInfo | Promise<IDemoInfo>
}

export interface IMdxDocCtx extends IMdxDocProps {
  frontmatter: any
}

export const MdxDocumentLayout: React.FC<IMdxDocCtx> = ({
  children,
  ...props
}) => {
  return (
    <docMetaCtx.Provider value={props}>
      <Layout>{children}</Layout>
    </docMetaCtx.Provider>
  )
}

export function wrapMdxModule(
  mdxExport: IOriginalMdxModule
): IWrappedMdxModule {
  const frontmatter = getFrontmatter(mdxExport)
  const DocComp = mdxExport.default
  const WrappedDocComp: React.FC<IMdxDocProps> = (props) => {
    const ctxVal: IMdxDocCtx = {
      frontmatter,
      ...props,
    }
    return (
      <MDXProvider components={mdComps}>
        <MdxDocumentLayout {...ctxVal}>
          <DocComp />
        </MdxDocumentLayout>
      </MDXProvider>
    )
  }
  return {
    ...mdxExport,
    default: WrappedDocComp,
    frontmatter,
  }
}

function getFrontmatter(mdxExport: IOriginalMdxModule) {
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
