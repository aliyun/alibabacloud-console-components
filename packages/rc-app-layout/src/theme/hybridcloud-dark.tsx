import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface IProps {}

const GlobalStyle = createGlobalStyle`
  :root {
    --console-layout-nav-shadow: none;
    --console-layout-nav-border: none;
    --console-layout-nav-trigger-bg: #383838;
    --console-layout-nav-trigger-border: none;
    --console-layout-nav-trigger-shadow: none;
    --console-layout-nav-trigger-icon-color: #6B6B6B;
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
