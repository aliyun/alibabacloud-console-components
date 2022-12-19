/**
 * @title 跳转
 * @description 快速跳转到某一页，可以设置 `false` 来隐藏。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

const change = function (value) {
  console.log(value)
}

export default function DemoComponent() {
  const content = (
    <div>
      <h3>Hide jump forcibly</h3>
      <Pagination total={500} showJump={false} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
