/**
 * @title 更多分页
 * @description 当分页数大于5时，自动展示 `...`
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <Pagination total={500} />
  return <Style>{content}</Style>
}
const Style = styled.div``
