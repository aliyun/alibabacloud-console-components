/**
 * @title 中间状态
 * @description 通过使用 `indeterminate` 来渲染[中间状态](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)的组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Button } from '@alicloudfe/components'

class IndeterminateApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
      indeterminate: true,
      disabled: false
    }
  }

  toggle = () => {
    if (this.state.indeterminate) {
      this.setState({ indeterminate: false })
    } else {
      this.setState({ checked: false, indeterminate: true })
    }
  }

  render() {
    return (
      <div>
        <Checkbox
          indeterminate={this.state.indeterminate}
          checked={this.state.checked}
          onChange={(checked) => {
            this.setState({ checked: checked, indeterminate: false })
          }}
        />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle}>
          toggle indeterminate
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <IndeterminateApp />
  return <Style>{content}</Style>
}
const Style = styled.div``
