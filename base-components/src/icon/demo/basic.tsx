/**
 * @title 基本用法
 * @description 展示图标基本使用方法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Box, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Box spacing={20} direction="row">
      <Icon type="atm" />
      <Icon type="smile" />
      <Icon type="success" />
      <Icon type="loading" />
    </Box>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
