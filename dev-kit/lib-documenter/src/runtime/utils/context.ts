import React, { useContext } from 'react'
import { IMdxDocCtx } from '../MdxWrapper'

/**
 * 将文档的元数据通过context传递给文档内的react组件，比如DemoRenderer就使用了这些元数据
 */
export const docMetaCtx = React.createContext<IMdxDocCtx | null>(null)

export function useDocMetaCtx() {
  const val = useContext(docMetaCtx)
  if (!val) throw new Error(`useDocMetaCtx not found`)
  return val
}
