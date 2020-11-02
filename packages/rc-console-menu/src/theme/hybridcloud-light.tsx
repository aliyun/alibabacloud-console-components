import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface IProps {}

const GlobalStyle = createGlobalStyle`
  :root {
    --console-menu-padding: 16px;
    --console-menu-bg: #F7F7F7;
    --console-menu-hover-bg: #F0F0F0;
    --console-menu-active-bg: #E6E6E6;
    --console-menu-active-text-color: #1A1A1A;
    --console-menu-item-height: 40px;
    --console-menu-active-bar-display: none;
    --console-menu-icon-arrow-color: #666666;
    --console-menu-header-padding: 18px 16px;
  }
`

export const HybridCloudLightTheme: React.FC<IProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}
