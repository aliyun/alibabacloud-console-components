/**
 * @title 滚动条&isFullScreen
 * @description 当对话框内容超出视窗时候，对话框会限制内容高度，显示滚动条，可以通过设置 `isFullScreen` 为 `true`，让对话框全屏显示不出现滚动条。注意，该属性仅在对话框垂直水平居中时生效，即 `align` 被设置为 `cc cc` 时。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch, Button, Dialog } from '@alicloudfe/components'

const largeContent = new Array(60)
  .fill()
  .map((_, index) => (
    <p key={index}>Start your business here by searching a popular product</p>
  ))

class Demo extends React.Component {
  state = {
    visible: false,
    isFullScreen: false,
    closeOnMaskClick: false
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  toggleIsFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }

  toggleCloseOnMaskClick = () => {
    this.setState({
      closeOnMaskClick: !this.state.closeOnMaskClick
    })
  }

  render() {
    const { visible, isFullScreen, closeOnMaskClick } = this.state

    return (
      <div>
        <div style={{ display: 'block', marginBottom: '10px' }}>
          When the height of the dialog exceeds the viewport height of the
          browser, whether to show the scroll bar:
        </div>
        <Switch
          style={{ display: 'block', marginBottom: '10px' }}
          checked={isFullScreen}
          onChange={this.toggleIsFullScreen}
        />
        <div style={{ display: 'block', marginBottom: '10px' }}>
          Close on mask click:
        </div>
        <Switch
          style={{ display: 'block', marginBottom: '10px' }}
          checked={closeOnMaskClick}
          onChange={this.toggleCloseOnMaskClick}
        />
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog
          title="Welcome to Alibaba.com"
          visible={visible}
          isFullScreen={isFullScreen}
          closeMode={
            closeOnMaskClick ? ['close', 'esc', 'mask'] : ['close', 'esc']
          }
          onOk={this.onClose}
          onCancel={this.onClose}
          onClose={this.onClose}
        >
          {largeContent}
        </Dialog>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
