/**
 * @title 去除空格
 * @description onChange返回会自动去除头尾空字符
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

class App extends React.Component {
  state = {
    value: ''
  }

  onChange(value) {
    console.log('onChange', value)
    this.setState({
      value
    })
  }

  onKeyDown(e, opts) {
    console.log('onKeyDown', opts)
  }

  render() {
    return (
      <div>
        <Input
          trim
          placeholder="cant not input space"
          aria-label="cant not input space"
          onChange={this.onChange.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
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
