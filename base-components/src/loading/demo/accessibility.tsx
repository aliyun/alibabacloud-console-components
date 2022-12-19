/**
 * @title 无障碍支持
 * @description 默认支持通过按下`Esc`键退出全屏显示加载态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading, Button } from '@alicloudfe/components'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      visible: false
    }
  }

  onClick() {
    this.setState({ visible: !this.state.visible })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <span>
        <Loading
          visible={this.state.visible}
          fullScreen
          safeNode={this.btn}
          onVisibleChange={this.onClose.bind(this)}
        >
          <Button
            onClick={this.onClick.bind(this)}
            ref={(ref) => (this.btn = ref)}
          >
            Full Screen
          </Button>
        </Loading>
      </span>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
