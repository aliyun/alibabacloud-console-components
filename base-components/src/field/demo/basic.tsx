/**
 * @title 基本
 * @description `getValue` `setValue` `reset` 的使用
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input, Button, Field } from '@alicloudfe/components'

class App extends React.Component {
  field = new Field(this)

  onGetValue() {
    console.log(this.field.getValue('input'))
  }

  render() {
    const { init, setValue, reset } = this.field

    return (
      <div className="demo">
        <Input {...init('input', { initValue: 'test' })} />
        <br />
        <br />
        <Button type="primary" onClick={this.onGetValue.bind(this)}>
          getValue
        </Button>
        <Button
          type="primary"
          onClick={() => setValue('input', 'set me by click')}
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
`
