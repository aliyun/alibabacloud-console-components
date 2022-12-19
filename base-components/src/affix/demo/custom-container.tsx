/**
 * @title 自定义目标容器
 * @description 可以通过 `container` 属性设置 Affix 组件需要监听其滚动事件的元素，该属性接收一个函数作为参数，默认为 `() => window`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Affix, Button } from '@alicloudfe/components'

class Demo extends React.Component {
  _containerRefHandler(ref) {
    this.container = ref
  }

  render() {
    return (
      <div
        className="custom-affix-container"
        ref={this._containerRefHandler.bind(this)}
      >
        <div className="affix-wrapper">
          <Affix container={() => this.container} offsetTop={0}>
            <Button type="secondary">Custom Container Affixed</Button>
          </Affix>
        </div>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-affix-container {
    height: 150px;
    overflow-y: scroll;
    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg)
      repeat 50% 50%;
  }

  .custom-affix-container .affix-wrapper {
    padding-top: 50px;
    height: 500px;
  }
`
