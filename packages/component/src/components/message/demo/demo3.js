import React from 'react'
import { Message, Select } from '@alicloud/console-components'
import './demo3.less'

const Option = Select.Option
const types = ['success', 'warning', 'error', 'notice', 'help', 'loading']

export default class Demo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'medium'
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(size) {
    this.setState({ size })
  }

  render() {
    const { size } = this.state

    return (
      <div className="message-size-demo">
        <span className="demo-label">Select Size：</span>
        <Select defaultValue="medium" onChange={this.handleSelect}>
          <Option value="medium">Medium</Option>
          <Option value="large">Large</Option>
        </Select>
        {types.map(type => (
          <Message key={type} title="title" type={type} size={size}>
            Content Content Content Content
          </Message>
        ))}
      </div>
    )
  }
}