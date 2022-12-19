/**
 * @title 对象数据
 * @description `useDetailValue` 把 `value` `onChange` 第一个参数 从字符串变成对象
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true }
]

function handleChange(value) {
  console.log(value)
}

export default function DemoComponent() {
  const content = (
    <Select
      useDetailValue
      defaultValue={{ value: '10001', label: 'Lucy King' }}
      onChange={handleChange}
      dataSource={dataSource}
      style={{ width: 150 }}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
