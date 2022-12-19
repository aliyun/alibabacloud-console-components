/**
 * @title 前进后退按钮只显示箭头
 * @description 可以通过指定 `shape` 属性来设置前进后退按钮箭头的显示方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <h3>normal</h3>
      <Pagination defaultCurrent={2} />
      <h3>arrow-only</h3>
      <Pagination defaultCurrent={2} shape="arrow-only" />
      <h3>arrow-prev-only</h3>
      <Pagination defaultCurrent={2} shape="arrow-prev-only" />
      <h3>no-border</h3>
      <Pagination defaultCurrent={2} shape="no-border" type="simple" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-pagination + .next-pagination {
    margin-top: 20px;
  }
`
