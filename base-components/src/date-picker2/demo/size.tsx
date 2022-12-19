/**
 * @title 尺寸大小
 * @description 通过 `size` 属性设置输入框大小，默认`medium`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2, Radio } from '@alicloudfe/components'

const { useState } = React
const RadioGroup = Radio.Group

const dataSource = [
  {
    value: 'large',
    label: 'Large'
  },
  {
    value: 'medium',
    label: 'Medium'
  },
  {
    value: 'small',
    label: 'Small'
  }
]
const { RangePicker } = DatePicker2

function Demo() {
  const [size, setSize] = useState('medium')
  const onChange = (val) => console.log(val)

  return (
    <div>
      <RadioGroup
        shape="button"
        type="primary"
        defaultValue={size}
        dataSource={dataSource}
        onChange={(v) => setSize(v)}
      />
      <br />
      <br />
      <DatePicker2 size={size} onChange={onChange} />
      <br />
      <br />
      <RangePicker size={size} onChange={onChange} />
      <br />
      <br />
    </div>
  )
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
