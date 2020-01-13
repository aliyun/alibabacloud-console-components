import React, { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/react'
import mdComps from './MarkdownComponents'

interface IDocWrapperProps {
  meta: unknown
  pkgInfo?: {
    prodPkgName: string
    actualLoadPkgName: string
    actualLoadPkgVersion: string
  }
  mode?: 'local-dev'
}

interface ICtxValue {
  meta?: unknown
  pkgInfo?: {
    prodPkgName: string
    actualLoadPkgName: string
    actualLoadPkgVersion: string
  }
  mode?: 'local-dev'
}

/**
 * 将文档的元数据通过context传递给文档内的react组件，比如DemoRenderer就使用了这些元数据
 */
export const docMetaCtx = React.createContext<ICtxValue>({})

const Wrapper: React.FC<IDocWrapperProps> = props => {
  const ctxVal = useMemo(() => {
    return {
      docMeta: props.meta,
      pkgInfo: props.pkgInfo,
      mode: props.mode,
    }
  }, [props.meta, props.pkgInfo])
  return (
    <docMetaCtx.Provider value={ctxVal}>{props.children}</docMetaCtx.Provider>
  )
}

const components = {
  ...mdComps,
  wrapper: Wrapper,
}

const HOC = WrappedComp =>
  function MdxWrapper(props) {
    return (
      <MDXProvider components={components}>
        <WrappedComp {...props} />
      </MDXProvider>
    )
  }

export default HOC
