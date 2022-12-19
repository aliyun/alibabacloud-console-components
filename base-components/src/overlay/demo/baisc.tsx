/**
 * @title 基本
 * @description 弹出一个弹层。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  onClick = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.onClick}
          ref={(ref) => {
            this.btn = ref
          }}
        >
          Toggle visible
        </Button>
        <Overlay
          visible={this.state.visible}
          target={() => this.btn}
          safeNode={() => this.btn}
          onRequestClose={this.onClose}
        >
          <span className="overlay-demo">Hello World From Overlay!</span>
        </Overlay>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #efefef;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`
