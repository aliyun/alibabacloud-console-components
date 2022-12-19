/**
 * @title 自定义弹出方向
 * @description 自定义弹出方向
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio, Button, Drawer } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    visible: false,
    placement: 'right'
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onClose = (reason) => {
    this.setState({
      visible: false
    })
  }

  onPlacementChange = (dir) => {
    this.setState({
      placement: dir
    })
  }

  render() {
    return (
      <div>
        <Radio.Group
          dataSource={['right', 'bottom', 'left', 'top']}
          defaultValue={'right'}
          onChange={this.onPlacementChange}
        />
        <br />
        <br />
        <Button type="primary" onClick={this.onOpen}>
          {' '}
          open{' '}
        </Button>
        <Drawer
          title="标题"
          visible={this.state.visible}
          placement={this.state.placement}
          onClose={this.onClose}
        >
          Start your business here by searching a popular product
        </Drawer>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
