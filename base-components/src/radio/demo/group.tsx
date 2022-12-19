/**
 * @title 单选分组
 * @description 使用 `<Radio.Group>` 渲染 `<Radio>` 分组，选项互斥。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

const RadioGroup = Radio.Group

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'orange'
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 14 }}>
          <label id="groupId">Choose fruit: </label>
        </span>
        <br />
        <br />
        <RadioGroup
          value={this.state.value}
          onChange={this.onChange}
          aria-labelledby="groupId"
        >
          <Radio id="apple" value="apple">
            Apple
          </Radio>
          <Radio id="watermelon" value="watermelon">
            Watermelon
          </Radio>
          <Radio id="orange" value="orange">
            Orange
          </Radio>
        </RadioGroup>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
