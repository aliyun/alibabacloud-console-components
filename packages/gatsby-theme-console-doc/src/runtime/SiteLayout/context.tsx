import React, { useContext } from 'react'
import { IPageContext } from '.'

export const pageCtx = React.createContext<null | IPageContext>(null)

export function usePageCtx() {
  const ctx = useContext(pageCtx)
  if (!ctx) {
    throw new Error(`can't access pageCtx from this component`)
  }
  return ctx
}
