/**
 * @title 受控组件
 * @description 使用 `RadioGroup` 渲染的组，通过设置 `value` 属性可以让组件变成[受控组件](https://facebook.github.io/react/docs/forms.html#controlled-components)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

const RadioGroup = Radio.Group

const list = [
  {
    value: 'appale',
    label: 'Appale'
  },
  {
    value: 'pear',
    label: 'Pear'
  },
  {
    value: 'orange',
    label: 'Orange'
  }
]

class ControlApp extends React.Component {
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
    console.log('onChange', value)
  }

  onClick(e) {
    console.log('onClick', e)
  }

  render() {
    return (
      <div>
        normal:{' '}
        <RadioGroup
          dataSource={list}
          value={this.state.value}
          onChange={this.onChange}
        />
        <br />
        <br />
        <br />
        disabled:{' '}
        <RadioGroup
          disabled
          dataSource={list}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <ControlApp />
  return <Style>{content}</Style>
}
const Style = styled.div``
