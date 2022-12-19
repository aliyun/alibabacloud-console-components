/**
 * @title 移动端
 * @description device=phone 下会强制设置 type=normal
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker, Radio } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    device: 'desktop'
  }

  handleDeviceChange = (device) => {
    this.setState({
      device
    })
  }

  render() {
    return (
      <div>
        <Radio.Group
          shape="button"
          value={this.state.device}
          onChange={this.handleDeviceChange}
        >
          <Radio value="desktop">desktop</Radio>
          <Radio value="phone">phone</Radio>
        </Radio.Group>
        <hr />
        <NumberPicker device={this.state.device} />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
