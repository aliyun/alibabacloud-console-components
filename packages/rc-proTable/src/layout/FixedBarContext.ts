import React, { createContext } from 'react'

export default createContext<{
  fixedClassName?: string
  fixedBarZIndex?: number
  fixedStyle: React.CSSProperties
}>({
  // zindex应该低于console-base的左上角抽屉栏
  fixedBarZIndex: 99,
  fixedClassName: '',
  fixedStyle: {},
})
