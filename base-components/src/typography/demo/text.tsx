/**
 * @title 文本
 * @description 内置不同样式的文本。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Typography } from '@alicloudfe/components'

const { Text } = Typography

export default function DemoComponent() {
  const content = (
    <div>
      <Text>Fusion Design</Text>
      <br />
      <Text mark>Fusion Design</Text>
      <br />
      <Text code>Fusion Design</Text>
      <br />
      <Text underline>Fusion Design</Text>
      <br />
      <Text delete>Fusion Design</Text>
      <br />
      <Text strong>Fusion Design</Text>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
