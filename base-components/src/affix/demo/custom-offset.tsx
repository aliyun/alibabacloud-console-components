/**
 * @title 自定义偏移量
 * @description 可以通过 `offsetTop` 或 `offsetBottom` 自定义偏移量。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Affix, Button } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Affix offsetBottom={0}>
      <Button type="secondary">Custom Offset Affixed</Button>
    </Affix>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
