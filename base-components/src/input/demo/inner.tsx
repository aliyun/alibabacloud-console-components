/**
 * @title 水印和前后缀
 * @description 可以添加水印， 为input前后端增加额外内容
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input, Icon } from '@alicloudfe/components'

class App extends React.Component {
  state = {
    v: ''
  }

  onChange = (v) => {
    this.setState({
      v
    })
  }

  onClick = () => {
    console.log(this.state.v)
  }

  render() {
    return (
      <div>
        <Input
          innerBefore={
            <Icon type="search" style={{ margin: 4 }} onClick={this.onClick} />
          }
          placeholder="search"
          value={this.state.v}
          aria-label="input with config of innerBefore"
          onChange={this.onChange}
        />
        <br />
        <br />

        <Input
          innerAfter={
            <Icon
              type="search"
              size="xs"
              onClick={this.onClick}
              style={{ margin: 4 }}
            />
          }
          placeholder="search"
          value={this.state.v}
          aria-label="input with config of innerAfter"
          onChange={this.onChange}
        />
        <br />
        <br />

        <Input
          disabled
          defaultValue="hi"
          innerAfter={<Icon type="calendar" style={{ margin: 4 }} />}
          aria-label="input with config of innerAfter and disabled"
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
