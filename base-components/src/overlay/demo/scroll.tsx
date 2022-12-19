/**
 * @title 弹层跟随滚动
 * @description 弹层默认参照 `document.body` 绝对定位，如果弹层显示隐藏的触发元素所在容器（一般为父节点）有滚动条，那么当容器滚动时，会发生触发元素与弹层相分离的情况，解决的办法是将弹层渲染到触发元素所在的容器中。（触发元素所在的容器，必须设置 `position` 样式，以完成弹层的绝对定位。）
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button } from '@alicloudfe/components'

const { Popup } = Overlay

export default function DemoComponent() {
  const content = (
    <div className="scroll-container">
      <Popup
        trigger={<Button>Open</Button>}
        triggerType="click"
        container={(trigger) => trigger.parentNode}
      >
        <div className="overlay-demo">Hello World From Popup!</div>
      </Popup>
      <div style={{ height: '300px' }} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }

  .scroll-container {
    position: relative;
    height: 150px;
    padding: 10px;
    border: 1px solid #eee;
    overflow: auto;
  }
`
