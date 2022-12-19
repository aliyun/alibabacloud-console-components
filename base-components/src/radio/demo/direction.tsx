/**
 * @title 垂直展示
 * @description 垂直展示`<Radio.Group>`，配合更多输入框。仅适用于非Button样式的`<Radio.Group>`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio, Input, Switch } from '@alicloudfe/components'

class App extends React.Component {
  state = {
    value: 1,
    dir: true
  }

  onChange = (value, e) => {
    console.log('radio checked', value, e)
    this.setState({
      value
    })
  }

  changeDir = () => {
    this.setState({
      dir: !this.state.dir
    })
  }

  render() {
    const { value } = this.state
    return (
      <React.Fragment>
        toggle direction:{' '}
        <Switch
          size="small"
          defaultChecked
          onChange={this.changeDir}
          style={{ verticalAlign: 'middle' }}
        />
        <br />
        <br />
        <Radio.Group
          onChange={this.onChange}
          value={value}
          itemDirection={this.state.dir ? 'ver' : 'hoz'}
        >
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? (
              <Input style={{ width: 100, marginLeft: 10 }} />
            ) : null}
          </Radio>
        </Radio.Group>
      </React.Fragment>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
