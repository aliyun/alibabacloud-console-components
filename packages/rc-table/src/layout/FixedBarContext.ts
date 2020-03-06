import React, { createContext } from 'react'

export default createContext<{
  fixedClassName?: string
  fixedBarZIndex?: number
  fixedStyle: React.CSSProperties
}>({
  fixedBarZIndex: 1000,
  fixedClassName: '',
  fixedStyle: {},
})
