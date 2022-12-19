/**
 * @title 分页按钮链接
 * @description 可以通过指定 `link` 属性来设置页码按钮的跳转链接，方便 SEO，link 属性的值为一个包含 `{page}` 的模板字符串，Pagination 组件会将该占位符替换为具体的页码数字。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

const format = `${window.location.href}#/{page}`

export default function DemoComponent() {
  const content = <Pagination defaultCurrent={2} link={format} />
  return <Style>{content}</Style>
}
const Style = styled.div``
