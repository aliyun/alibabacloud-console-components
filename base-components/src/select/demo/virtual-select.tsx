/**
 * @title 无限滚动
 * @description select 配合无限滚动
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const Option = Select.Option

const onChange = function (value) {
  console.log(value)
}

function generateItem(index) {
  return { label: `option${index}`, value: `option${index}` }
}

function generateOption(index) {
  return (
    <Option
      key={`option${index}`}
      value={`option${index}`}
    >{`option${index}`}</Option>
  )
}

function generateData(len, isOption) {
  const data = []

  for (let i = 0; i < len; i++) {
    isOption ? data.push(generateOption(i)) : data.push(generateItem(i))
  }

  return data
}

export default function DemoComponent() {
  const content = (
    <div>
      <Select
        dataSource={generateData(100)}
        useVirtual
        onChange={onChange}
        defaultValue="option0"
      />
      <br />
      <br />
      <Select useVirtual onChange={onChange} defaultValue="option50">
        {generateData(100, true)}
      </Select>
      <br />
      <br />
      <Select
        style={{ width: 300 }}
        hasSelectAll
        tagInline
        mode="multiple"
        dataSource={generateData(100)}
        useVirtual
        onChange={onChange}
        defaultValue={['option0']}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
