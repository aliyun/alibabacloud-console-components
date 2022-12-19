/**
 * @title 自定义百分比信息
 * @description `textRender` 控制百分比信息的展示,通过自定义`textRender`个性化百分比渲染. 下面给一个 百分比进度取2位,当达到100%是显示Icon的progressbar.
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress, Icon } from '@alicloudfe/components'

const textRender = (percent) => {
  if (percent === 100) {
    return <Icon type="select" size="medium" />
  }
  return `${percent.toFixed(2)}%`
}

export default function DemoComponent() {
  const content = (
    <div>
      {[1, 2, 3, 4, 5, 6].map((value, index) => (
        <Progress
          key={index}
          percent={(value / 6) * 100}
          shape="circle"
          color={`hsl(${index * 60 + 60}, 90%, 50%)`}
          textRender={textRender}
        />
      ))}
      {[1, 2, 3, 4, 5, 6].map((value, index) => (
        <Progress
          key={index}
          percent={(value / 6) * 100}
          shape="line"
          color={`hsl(${index * 60 + 60}, 90%, 50%)`}
          textRender={textRender}
        />
      ))}
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
