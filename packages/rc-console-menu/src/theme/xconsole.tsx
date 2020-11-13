import React from 'react'
import { css } from 'styled-components'
import { Provider } from './context'

interface IProps {}

const varDef = css`
  --console-menu-divider-margin: 15px;
  --console-menu-divider-border: 1px solid #e3e4e6;
  --console-menu-header-color: #333333;
  --console-menu-bg: #fff;
  --console-menu-header-padding: 24px 24px 16px;
  --console-menu-normal-text-color: #333333;
  --console-menu-padding: 24px;
  --console-menu-hover-bg: #f7f9fa;
  --console-menu-item-height: 32px;
  --console-menu-icon-arrow-color: #a8a8a8;
  --console-menu-active-bg: #eff3f8;
  --console-menu-active-text-color: #0064c8;
  --console-menu-active-bar-display: block;
  --console-menu-disabled-text-color: #c1c1c1;
  --console-menu-disabled-bg: #f5f5f5;
`

const ctxValue = { varDef }

export const XConsoleTheme: React.FC<IProps> = (props) => {
  return <Provider value={ctxValue}>{props.children}</Provider>
}
