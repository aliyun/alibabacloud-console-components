/**
 * @title 基本
 * @description 简单的 Loading 状态，包裹需要显示加载态的组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Loading tip="加载中...">
        <div className="demo-basic">basic usage</div>
      </Loading>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo-title-basic {
    margin: 0 60px 0 60px;
  }

  .demo-basic {
    width: 120px;
    text-align: center;
    padding: 50px;
  }
`
