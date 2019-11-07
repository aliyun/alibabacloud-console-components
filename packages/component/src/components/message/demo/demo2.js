import React from 'react'
import { Message, Select } from '@alicloud/console-components'
import './demo2.less'

const Option = Select.Option
const types = ['success', 'warning', 'error', 'notice', 'help', 'loading']

export default class Demo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shape: 'inline'
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(shape) {
    this.setState({ shape })
  }

  render() {
    const { shape } = this.state

    return (
      <div className="message-shape-demo">
        <span className="demo-label">Select Shape：</span>
        <Select defaultValue="inline" onChange={this.handleSelect} autoWidth={false}>
          <Option value="inline">Inline</Option>
          <Option value="addon">Addon</Option>
          <Option value="toast">Toast</Option>
        </Select>
        {types.map(type => (
          <Message key={type} title="title" type={type} shape={shape}>
            Content Content Content Content
          </Message>
        ))}
      </div>
    )
  }
}