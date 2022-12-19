/**
 * @title 非受控分页
 * @description 非受控分页，是指分页组件的状态由自己维护，组件值的改变可以通过 `onChange` 事件通知父组件，默认值由 `defaultCurrent` 初始化。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

const change = function (value) {
  console.log(value)
}

export default function DemoComponent() {
  const content = <Pagination defaultCurrent={2} onChange={change} />
  return <Style>{content}</Style>
}
const Style = styled.div``
