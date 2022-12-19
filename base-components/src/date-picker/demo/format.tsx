/**
 * @title 日期格式
 * @description 通过 `format` 属性可以约束日期选择器的日期格式，该格式同时会限定用户的输入格式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker } = DatePicker
const onChange = (val) => console.log(val)

export default function DemoComponent() {
  const content = (
    <div>
      <DatePicker format="YYYY-M-D" onChange={onChange} />
      <br />
      <br />
      <DatePicker
        format="YYYY-M-D"
        onChange={onChange}
        showTime={{ format: 'HH:mm' }}
      />
      <br />
      <br />
      <RangePicker format="YYYY-M-D" onChange={onChange} />
      <br />
      <br />
      <RangePicker
        format="YYYY-M-D"
        onChange={onChange}
        showTime={{ format: 'HH:mm' }}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
