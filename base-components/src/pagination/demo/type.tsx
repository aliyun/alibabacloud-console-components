/**
 * @title 简洁/迷你 风格
 * @description 可以通过指定 `type` 属性来设置分页器的类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <h3>normal</h3>
      <Pagination defaultCurrent={2} />
      <h3>simple</h3>
      <Pagination defaultCurrent={2} type="simple" />
      <h3>mini</h3>
      <Pagination defaultCurrent={2} type="mini" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
