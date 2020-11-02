import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

interface IProps {}

const GlobalStyle = createGlobalStyle`
  :root {
    --console-layout-nav-shadow: none;
    --console-layout-nav-border: none;
    --console-layout-nav-trigger-bg: #D9D9D9;
    --console-layout-nav-trigger-border: none;
    --console-layout-nav-trigger-shadow: none;
    --console-layout-nav-trigger-icon-color: #fff;
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
