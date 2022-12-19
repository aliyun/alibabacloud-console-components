/**
 * @title 基本
 * @description 第一个抽屉
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Drawer } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    visible: false
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onClose = (reason, e) => {
    console.log('onClose: ', reason, e)
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.onOpen}>
          {' '}
          open{' '}
        </Button>
        <Drawer
          title="标题"
          placement="right"
          width={400}
          visible={this.state.visible}
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
