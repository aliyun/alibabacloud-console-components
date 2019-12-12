import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from '@alicloud/console-components'
import styled, { createGlobalStyle } from 'styled-components'

const { PopupItem } = Menu

const GlobalStyle = createGlobalStyle`
	.my-custom-content {
    width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
  }
`

export default class Demo4 extends React.Component {
  render() {
    const popupProps = {
      target: () => ReactDOM.findDOMNode(this),
      offset: [-1, 0],
      animation: false,
    }

    return (
      <SMenu popupProps={popupProps}>
        <GlobalStyle />
        <PopupItem key="0" label="Popup item 1">
          <div className="my-custom-content">Custom content 1</div>
        </PopupItem>
        <PopupItem key="1" label="Popup item 2">
          <div className="my-custom-content">Custom content 2</div>
        </PopupItem>
        <PopupItem key="2" label="Popup item 3">
          <div className="my-custom-content">Custom content 3</div>
        </PopupItem>
        <PopupItem key="3" label="Popup item 4">
          <div className="my-custom-content">Custom content 4</div>
        </PopupItem>
      </SMenu>
    )
  }
}

export const demoMeta = {
  zhName: '自定义弹出内容',
  zhDesc: `自定义菜单弹出内容。`,
}

const SMenu = styled(Menu)`
  width: 200px;
  border: 1px solid #ccc;
  padding: 0;
  box-shadow: none;
  z-index: 1000;
`
