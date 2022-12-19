/**
 * @title 自定义渲染时间选择菜单
 * @description 可以通过 `renderTimeMenuItems` 来自定义渲染下拉菜单每一项。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alicloudfe/components'

const renderTimeMenuItems = (list) => {
  return list.map(({ label, value }) => {
    return {
      value,
      label: value > 9 ? String(value) : `0${value}`
    }
  })
}

export default function DemoComponent() {
  const content = <TimePicker renderTimeMenuItems={renderTimeMenuItems} />
  return <Style>{content}</Style>
}
const Style = styled.div``
