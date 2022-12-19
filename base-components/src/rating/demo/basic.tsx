/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Rating
        defaultValue={3.5}
        onChange={(val) => console.log('change:', val)}
        onHoverChange={(val) => console.log('hover:', val)}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
