/**
 * @title 传入数组配置
 * @description 通过配置 `dataSource` 参数来渲染单选框分组，数组中对象元素支持配置Checkbox属性。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

const list = [
  {
    value: 'apple',
    label: 'Apple',
    disabled: false
  },
  {
    value: 'pear',
    label: 'Pear'
  },
  {
    value: 'orange',
    label: 'Orange',
    disabled: true
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'apple'
    }
  }

  onChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <Checkbox.Group
        dataSource={list}
        size="small"
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
