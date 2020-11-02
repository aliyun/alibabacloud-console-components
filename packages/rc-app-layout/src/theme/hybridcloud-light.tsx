import React from 'react'
import { css } from 'styled-components'
import ctx from './context'

interface IProps {}

const varDef = css`
  --console-layout-nav-shadow: none;
  --console-layout-nav-border: none;
  --console-layout-nav-trigger-bg: #d9d9d9;
  --console-layout-nav-trigger-border: none;
  --console-layout-nav-trigger-shadow: none;
  --console-layout-nav-trigger-icon-color: #fff;
  --console-layout-nav-bg: #f7f7f7;
`

const ctxValue = { varDef }

export const HybridCloudLightTheme: React.FC<IProps> = (props) => {
  return <ctx.Provider value={ctxValue}>{props.children}</ctx.Provider>
}
