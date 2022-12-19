/**
 * @title 自定义受控字段
 * @description valueName 的默认值为 value，如果为其他需要用 valueName 指定
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Checkbox, Radio, Switch, Field } from '@alicloudfe/components'

class App extends React.Component {
  field = new Field(this)

  render() {
    const init = this.field.init

    return (
      <div className="demo">
        <Radio {...init('radio', { initValue: false, valueName: 'checked' })}>
          {' '}
          checked
        </Radio>
        <br />
        <Checkbox
          {...init('checkbox', { valueName: 'checked', initValue: true })}
        >
          defaultChecked
        </Checkbox>
        <br />
        <Switch
          {...init('switch', { valueName: 'checked', initValue: false })}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
        <br />

        <Button
          type="primary"
          onClick={() => {
            console.log(this.field.getValues())
          }}
        >
          getValues
        </Button>
        <Button
          onClick={() => {
            this.field.setValues({
              radio: true,
              switch: true,
              checkbox: false
            })
          }}
        >
          {' '}
          setValues{' '}
        </Button>
        <Button
          onClick={() => {
            this.field.reset()
          }}
        >
          reset
        </Button>
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
