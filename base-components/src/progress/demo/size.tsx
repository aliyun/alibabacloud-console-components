/**
 * @title 尺寸
 * @description 可以通过 `size` 属性制定进度条的大小。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Box direction="row" spacing={20}>
        <Progress percent={30} size="small" shape="circle" />
        <Progress percent={50} size="medium" shape="circle" />
        <Progress percent={90} size="large" shape="circle" />
      </Box>
      <br />
      <Box direction="column" spacing={20}>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="medium" />
        <Progress percent={90} size="large" />
      </Box>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
