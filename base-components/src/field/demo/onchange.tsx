/**
 * @title 关联控制
 * @description 组件之间的关联控制. `onChange` 统一管理。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input, Select, Range, Field } from '@alicloudfe/components'

class App extends React.Component {
  field = new Field(this, {
    onChange: (name, value) => {
      console.log(this.field.getValues())

      switch (name) {
        case 'input':
          this.field.setValue('sync', `change to: ${value}`)
          break
        case 'select':
          this.field.setValue('sync', `${value} is coming`)
          break
        case 'range':
          this.field.setValue('sync', ` (${value.join(',')}) ready`)
          break
      }
    }
  })

  render() {
    const { init, getValue } = this.field
    const layout = {
      marginBottom: 10,
      width: 400
    }

    return (
      <div>
        <Input
          placeholder="controlled by onChange"
          {...init('input')}
          style={layout}
        />
        <br />
        <Input placeholder="under control" {...init('input')} style={layout} />
        <br />

        <Select style={layout} {...init('select', { initValue: 'lucy' })}>
          <Select.Option value="jack">jack</Select.Option>
          <Select.Option value="lucy">lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            disabled
          </Select.Option>
          <Select.Option value="hugo">hugo</Select.Option>
        </Select>
        <br />

        {getValue('select') !== 'hugo' ? (
          <Range
            style={{ ...layout, marginTop: 30 }}
            slider={'double'}
            scales={10}
            marks={10}
            {...init('range', { initValue: [20, 40], trigger: 'onProcess' })}
          />
        ) : null}
        <br />

        <hr style={{ marginBottom: 10 }} />
        <Input
          placeholder="everyone can control me"
          {...init('sync')}
          style={layout}
        />
        <br />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
