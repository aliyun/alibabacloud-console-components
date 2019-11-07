import React from 'react'
import { TimePicker } from '@alicloud/console-components'
import moment from 'moment'

export default class Demo4 extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: moment('12:00:00', 'HH:mm:ss', true),
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
