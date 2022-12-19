/**
 * @title 不可直接输入
 * @description 用户不可直接输入编辑数据
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker, Button } from '@alicloudfe/components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      value: 0
    }
  }

  toogle() {
    this.setState({
      editable: !this.state.editable
    })
  }

  onChange(value) {
    console.log('changed', value)
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <NumberPicker
          onChange={this.onChange.bind(this)}
          value={this.state.value}
          editable={this.state.editable}
        />
        <br />
        <br />
        <Button onClick={this.toogle.bind(this)}>
          Toggle to {!this.state.editable ? 'editable' : 'uneditable'}
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
