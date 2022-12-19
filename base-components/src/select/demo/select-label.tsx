/**
 * @title 前后缀
 * @description Select 增加前后缀
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const dataSource = [
  { label: '1', value: 1 },
  { label: '10', value: 10 },
  { label: '50', value: 50 },
  { label: '100', value: 100 }
]

const handleChange = (value) => {
  console.log('handleChange: ', value)
}

export default function DemoComponent() {
  const content = (
    <Select
      label="size:"
      innerAfter={<span style={{ color: '#999', marginRight: 4 }}>GB</span>}
      dataSource={dataSource}
      onChange={handleChange}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
