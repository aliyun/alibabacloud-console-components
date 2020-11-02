import React from 'react'
import { css } from 'styled-components'
import ctx from './context'

interface IProps {}

const varDef = css`
  --console-layout-nav-shadow: none;
  --console-layout-nav-border: none;
  --console-layout-nav-trigger-bg: #383838;
  --console-layout-nav-trigger-border: none;
  --console-layout-nav-trigger-shadow: none;
  --console-layout-nav-trigger-icon-color: #6B6B6B;
  --console-layout-nav-bg: #1f1f1f;
`

const ctxValue = { varDef }

export const HybridCloudDarkTheme: React.FC<IProps> = (props) => {
  return <ctx.Provider value={ctxValue}>{props.children}</ctx.Provider>
}
