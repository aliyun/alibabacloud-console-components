/**
 * @title 颜色
 * @description 通过 `color` 属性可以改变进度条的颜色。Progress 有三个API可以改变进度条的颜色,其优先级为 color > progressive >  state。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress, Icon, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Box direction="row" spacing={60}>
        <Progress percent={30} shape="circle" color="#AF5F3C" />
        <Progress
          percent={50}
          shape="circle"
          color="#E91E63"
          backgroundColor={'#00BCD4'}
        />
        <Progress
          percent={90}
          shape="circle"
          color="rgba(119,66,141, 0.9)"
          textRender={() => <Icon type="select" size="xl" />}
        />
      </Box>
      <br />
      <br />
      <Box direction="column" spacing={20}>
        <Progress percent={30} shape="line" color="rgb(208,16,76)" />
        <Progress
          percent={50}
          shape="line"
          color="#E91E63"
          backgroundColor={'#00BCD4'}
        />
        <Progress
          percent={90}
          shape="line"
          color="blue"
          textRender={() => <Icon type="select" size="medium" />}
        />
      </Box>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
