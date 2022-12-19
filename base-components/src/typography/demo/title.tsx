/**
 * @title 标题
 * @description 展示不同级别的标题。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Typography } from '@alicloudfe/components'

const { H1, H2, H3, H4, H5, H6 } = Typography

export default function DemoComponent() {
  const content = (
    <div>
      <H1>h1. Fusion Design</H1>
      <H2>h2. Fusion Design</H2>
      <H3>h3. Fusion Design</H3>
      <H4>h4. Fusion Design</H4>
      <H5>h5. Fusion Design</H5>
      <H6>h6. Fusion Design</H6>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
