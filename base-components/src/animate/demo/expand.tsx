/**
 * @title 展开收起动画
 * @description 展示单个子元素的展开收起动画。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Animate } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expand: true }
    ;[
      'beforeEnter',
      'onEnter',
      'afterEnter',
      'beforeLeave',
      'onLeave',
      'afterLeave',
      'handleToggle'
    ].forEach((method) => {
      this[method] = this[method].bind(this)
    })
  }

  handleToggle() {
    this.setState({
      expand: !this.state.expand
    })
  }

  beforeEnter(node) {
    this.height = node.offsetHeight
    node.style.height = '0px'
  }

  onEnter(node) {
    node.style.height = `${this.height}px`
  }

  afterEnter(node) {
    this.height = null
    node.style.height = null
  }

  beforeLeave(node) {
    node.style.height = `${this.height}px`
  }

  onLeave(node) {
    node.style.height = '0px'
  }

  afterLeave(node) {
    node.style.height = null
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle expand</button>
        <Animate
          animation="expand"
          beforeEnter={this.beforeEnter}
          onEnter={this.onEnter}
          afterEnter={this.afterEnter}
          beforeLeave={this.beforeLeave}
          onLeave={this.onLeave}
          afterLeave={this.afterLeave}
        >
          {this.state.expand ? <div className="notice"></div> : null}
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
  .expand-enter {
    overflow: hidden;
  }

  .expand-enter-active {
    transition: height 0.3s ease-out;
  }

  .expand-leave {
    overflow: hidden;
  }

  .expand-leave-active {
    transition: height 0.3s ease-out;
  }

  .notice {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    border: 1px solid #ccc;
  }
`
