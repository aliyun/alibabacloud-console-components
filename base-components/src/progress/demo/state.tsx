/**
 * @title 进度条不同状态
 * @description 用户可以通过 `state` 属性自定义当前进度的展现状态，可取值为 `normal`, `success`, `error` 分别表示普通、成功、失败这三种状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div className="">
      <Progress
        percent={20}
        shape="circle"
        state="normal"
        className="custom-progress"
      />
      <Progress
        percent={95}
        shape="circle"
        state="success"
        className="custom-progress"
      />
      <Progress
        percent={95}
        shape="circle"
        state="error"
        className="custom-progress"
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-progress {
    margin: 0 20px;
  }
`
