/**
 * @title 传入数组配置
 * @description 通过配置 `dataSource` 参数来渲染单选框分组，数组中对象元素支持配置radio属性。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

const RadioGroup = Radio.Group

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
      value: 'apple',
      buttonValue: 'pear'
    }
  }

  onChange = (value) => {
    this.setState({
      value: value
    })
  }

  onButtonChange = (value) => {
    this.setState({
      buttonValue: value
    })
  }

  render() {
    return (
      <div>
        <RadioGroup
          dataSource={list}
          value={this.state.value}
          onChange={this.onChange}
        />
        <br />
        <br />
        <RadioGroup
          dataSource={list}
          shape="button"
          value={this.state.buttonValue}
          onChange={this.onButtonChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
