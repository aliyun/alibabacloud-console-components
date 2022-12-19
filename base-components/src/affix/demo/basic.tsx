/**
 * @title 基本
 * @description 默认情况下，Affix 的默认目标容器元素是整个 `window`，并且 `offsetTop = 0`，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Affix, Button } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Affix>
        <Button type="secondary">Basic Affixed Button</Button>
      </Affix>
      <br />
      <span>Scroll window to see button affixed.</span>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
