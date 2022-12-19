/**
 * @title 分页尺寸
 * @description 可以通过指定 `size` 属性来设置分页的尺寸。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <h3>small</h3>
      <Pagination defaultCurrent={2} size="small" />
      <h3>medium</h3>
      <Pagination defaultCurrent={2} size="medium" />
      <h3>large</h3>
      <Pagination defaultCurrent={2} size="large" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
