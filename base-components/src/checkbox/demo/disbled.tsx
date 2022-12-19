/**
 * @title 禁用状态
 * @description `Checkbox`禁用状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Switch } from '@alicloudfe/components'

class App extends React.Component {
  state = {
    disabled: true
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  render() {
    return (
      <React.Fragment>
        disabled:
        <Switch
          size="small"
          defaultChecked
          onChange={this.toggleDisabled}
          style={{ verticalAlign: 'middle' }}
        />
        <br />
        <br />
        <Checkbox
          defaultChecked={false}
          disabled={this.state.disabled}
          style={{ marginRight: 10 }}
        >
          Disabled
        </Checkbox>
        <Checkbox defaultChecked disabled={this.state.disabled}>
          Disabled
        </Checkbox>
      </React.Fragment>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
