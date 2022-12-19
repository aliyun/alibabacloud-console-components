/**
 * @title 基本使用
 * @description 最基本的使用、带清除、搜索功能的展示
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const Option = Select.Option

const onChange = function (value) {
  console.log(value)
}

const onToggleHighlightItem = function (item, type) {
  console.log(item, type)
}

const onFocus = () => {
  console.log('focus')
}

const onBlur = () => {
  console.log('blur')
}

export default function DemoComponent() {
  const content = (
    <div>
      <Select
        id="basic-demo"
        onChange={onChange}
        onToggleHighlightItem={onToggleHighlightItem}
        defaultValue="jack"
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label="name is"
        style={{ marginRight: 8 }}
      >
        <Option value="jack">Jack</Option>
        <Option value="frank">Frank</Option>
        <Option value="hugo">Hugo</Option>
      </Select>

      <Select defaultValue="clear" hasClear style={{ marginRight: 8 }}>
        <Option value="jack">Jack</Option>
        <Option value="frank">Frank</Option>
        <Option value="clear">clear</Option>
      </Select>

      <Select
        placeholder="show search"
        showSearch
        hasClear
        style={{ marginRight: 8 }}
      >
        <Option value="jack">Jack</Option>
        <Option value="frank">Frank</Option>
        <Option value="hugo">Hugo</Option>
      </Select>

      <Select disabled defaultValue="frank" style={{ marginRight: 8 }}>
        <Option value="jack">Jack</Option>
        <Option value="frank">Frank</Option>
        <Option value="hugo">Hugo</Option>
      </Select>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
