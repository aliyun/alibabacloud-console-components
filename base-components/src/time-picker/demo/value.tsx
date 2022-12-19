/**
 * @title 受控
 * @description 通过 `value` 和 `onChange` 实现受控，仅支持通过选择实现受控。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alicloudfe/components'
import moment from 'moment'

class ControlledTimePicker extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: moment('12:00:00', 'HH:mm:ss', true)
    }
  }

  onSelect = (value) => {
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    return <TimePicker value={this.state.value} onChange={this.onSelect} />
  }
}

export default function DemoComponent() {
  const content = (
    <ControlledTimePicker
      onChange={(val) => console.log(val.format('HH:mm:ss'))}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
