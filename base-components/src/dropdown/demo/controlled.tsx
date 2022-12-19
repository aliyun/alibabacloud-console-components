/**
 * @title 从弹层外关闭
 * @description 使用 visible 属性控制弹层显示或者隐藏，需要使用 safeNode 将其控制的元素告诉 dropdown 组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Dropdown, Menu, Button } from '@alicloudfe/components'

const menu = (
  <Menu>
    <Menu.Item>Option 1</Menu.Item>
    <Menu.Item>Option 2</Menu.Item>
    <Menu.Item>Option 3</Menu.Item>
    <Menu.Item>Option 4</Menu.Item>
  </Menu>
)

class App extends React.Component {
  state = {
    visible: false
  }

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  onVisibleChange = (visible) => {
    this.setState({
      visible
    })
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Button onClick={this.toggleVisible} ref="button">
            Toggle Overlay
          </Button>
        </div>
        <Dropdown
          trigger={<span>Hello dropdown</span>}
          triggerType="click"
          visible={this.state.visible}
          onVisibleChange={this.onVisibleChange}
          safeNode={() => this.refs.button}
        >
          {menu}
        </Dropdown>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
