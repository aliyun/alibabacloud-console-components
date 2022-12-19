/**
 * @title 自定义提示语及其位置
 * @description 通过`tip`自定义加载提示语，通过`tipAlign`设置提示语的位置，目前支持 `right` / `bottom (default)`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Loading tip={<span>default=bottom</span>}>
        <div className="demo-tip">default</div>
      </Loading>
      <Loading tip="right" tipAlign="right">
        <div className="demo-tip">right</div>
      </Loading>
      <Loading tip="bottom" tipAlign="bottom">
        <div className="demo-tip">bottom</div>
      </Loading>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo-tip {
    width: 200px;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`
