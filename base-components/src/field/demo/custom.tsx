/**
 * @title 自定义组件
 * @description 自己的组件如何接入Field。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Field } from '@alicloudfe/components'

class Custom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: typeof props.value === 'undefined' ? [] : props.value
    }
  }

  // update value
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: typeof nextProps.value === 'undefined' ? [] : nextProps.value
      })
    }
  }

  onAdd = () => {
    const value = this.state.value.concat([])
    value.push('new')

    this.setState({
      value
    })
    this.props.onChange(value)
  }

  render() {
    return (
      <div className="custom">
        {this.state.value.map((v, i) => {
          return <Button key={i}>{v}</Button>
        })}
        <Button type="primary" onClick={this.onAdd.bind(this)}>
          Add ＋{' '}
        </Button>
      </div>
    )
  }
}

/* eslint-disable react/no-multi-comp */
class App extends React.Component {
  field = new Field(this, {
    deepReset: true
  })

  onGetValue() {
    console.log(this.field.getValue('custom'))
  }

  render() {
    const { init, setValue, reset } = this.field

    return (
      <div className="demo">
        <Custom {...init('custom', { initValue: ['test'] })} />

        <br />
        <br />

        <Button type="primary" onClick={this.onGetValue.bind(this)}>
          getValue
        </Button>
        <Button
          type="primary"
          onClick={() => setValue('custom', ['test', 'setValue'])}
        >
          setValue
        </Button>
        <Button onClick={() => reset()}>reset</Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo .next-btn {
    margin-right: 5px;
  }
  .custom {
    border: 1px dashed;
    padding: 4px;
    display: inline-block;
  }
`
