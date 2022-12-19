/**
 * @title 无障碍支持
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const Option = Select.Option

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(value) {
    console.log(value)
  }

  render() {
    return (
      <div>
        <span id="select-a11y">Select: </span>
        <Select
          onChange={this.onChange}
          defaultValue="jack"
          aria-labelledby="select-a11y"
        >
          <Option value="jack">Jack</Option>
          <Option value="frank">Frank</Option>
          <Option value="hugo">Hugo</Option>
        </Select>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
