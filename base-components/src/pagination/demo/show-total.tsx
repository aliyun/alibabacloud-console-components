/**
 * @title 显示总数
 * @description 分页组件默认不显示总数，你可以通过 totalRender 自定义总数的显示结果。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

const total = 50

export default function DemoComponent() {
  const content = (
    <Pagination
      className="custom-pagination"
      total={total}
      totalRender={(total) => `Total: ${total}`}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-pagination {
    display: inline-block;
    margin-left: 10px;
  }
`
