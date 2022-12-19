/**
 * @title 无障碍支持
 * @description 组件内置了部分支持无障碍, 但是额外需要开发者手动设置才能完整支持无障碍: 设置upBtnprops以及downBtnprops，使得读屏软件可以正确表达按键的具体功能。设置`aria-live`目的是`NumberPicker`组件值发生改变时，读屏软件会进行读取。
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      tip: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(value, e) {
    let num = ''
    if (value >= 0) {
      num = value
    } else {
      num = `negative ${value * -1}`
    }
    this.setState({
      value: value,
      tip: `${num}`
    })
  }
  render() {
    const { value, tip } = this.state
    return (
      <div>
        <span
          id="a11y-number-picker"
          aria-live="assertive"
          aria-label={tip}
        ></span>
        <NumberPicker
          type="inline"
          value={value}
          onChange={this.onChange}
          upBtnProps={{ 'aria-label': 'increasing button' }}
          downBtnProps={{ 'aria-label': 'decreasing button' }}
          aria-labelledby="a11y-number-picker"
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
