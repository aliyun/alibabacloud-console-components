/**
 * @title 圆形进度条
 * @description 通过 `shape` 属性可以改变进度指示器的外观，当取值为 `circle` 时为圆形进度条。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress, Icon, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Box direction="row" spacing={20}>
      <Progress percent={30} shape="circle" />
      <Progress percent={80} shape="circle" textRender={() => ''} />
      <Progress
        percent={100}
        shape="circle"
        textRender={() => <Icon type="select" size="xl" />}
      />
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
