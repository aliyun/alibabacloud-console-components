/**
 * @title 动画尺寸
 * @description 通过`size`设置Loading动画的尺寸，只对原生的动画指示符`indicator`有效。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Loading tip={<span>default = large</span>}>
        <div className="demo-size">test</div>
      </Loading>
      <Loading tip="large" size="large">
        <div className="demo-size">test</div>
      </Loading>
      <Loading tip="medium" size="medium">
        <div className="demo-size">test</div>
      </Loading>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo-size {
    width: 200px;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`
