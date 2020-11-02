import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface IProps {}

const GlobalStyle = createGlobalStyle`
  :root {
    --console-menu-padding: 16px;
    --console-menu-bg: #1F1F1F;
    --console-menu-hover-bg: #303030;
    --console-menu-active-bg: #383838;
    --console-menu-active-text-color: #1A1A1A;
    --console-menu-item-height: 40px;
    --console-menu-active-bar-display: none;
    --console-menu-icon-arrow-color: #666666;
    --console-menu-header-padding: 18px 16px;
    --console-menu-normal-text-color: #A8A8A8;
    --console-menu-header-color: #EAEAEA;
    --console-menu-active-text-color: #EAEAEA;
    --console-menu-disabled-bg: #1F1F1F;
    --console-menu-divider-border: 1px solid #6B6B6B;
  }
`

export const HybridCloudDarkTheme: React.FC<IProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}
