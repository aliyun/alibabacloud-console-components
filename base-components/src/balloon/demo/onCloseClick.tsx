/**
 * @title close按钮事件，手动控制visible
 * @description 使用 `visible`,属性控制浮层显示, 使balloon变为受限组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Balloon } from '@alicloudfe/components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  // triggered every time visible becomes false
  onClose() {
    console.log('onClose doing!')
  }

  onClick() {
    this.setState({ visible: true })
  }

  render() {
    const visibleTrigger = (
      <Button onClick={this.onClick.bind(this)} type="primary">
        click to pupup the card
      </Button>
    )
    const content = <div>content</div>

    return (
      <div>
        <Balloon
          trigger={visibleTrigger}
          triggerType="click"
          visible={this.state.visible}
          onClose={this.onClose.bind(this)}
        >
          {content}
        </Balloon>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
