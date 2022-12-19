/**
 * @title 基本
 * @description 展示单个子元素的进场离场动画。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Animate } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: true }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle visible</button>
        <Animate
          animation={{
            enter: 'my-zoom-in',
            leave: 'my-zoom-out'
          }}
        >
          {this.state.visible ? (
            <div className="basic-demo">Next Animate</div>
          ) : null}
        </Animate>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .basic-demo {
    font-size: 96px;
    text-align: center;
  }

  .my-zoom-in {
    opacity: 0;
  }

  .my-zoom-in-active {
    animation: my-zoom-in 500ms linear;
  }

  .my-zoom-out {
    opacity: 1;
  }

  .my-zoom-out-active {
    animation: my-zoom-out 500ms linear;
  }

  @keyframes my-zoom-in {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes my-zoom-out {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }
`
