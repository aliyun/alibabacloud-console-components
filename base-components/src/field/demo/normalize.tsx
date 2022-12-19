/**
 * @title 自定义返回值
 * @description 当组件返回的数据和最终期望提交的格式不一致的时候，可以使用 `getValueFormatter` 和 `setValueFormatter` 两个函数做转换。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Field, DatePicker, Switch } from '@alicloudfe/components'
import moment from 'moment'

class App extends React.Component {
  field = new Field(this)

  render() {
    const init = this.field.init

    return (
      <div>
        <Switch
          {...init('switch', {
            getValueFormatter: (value) => (value ? 1 : 0),
            setValueFormatter: (value) => value === 1
          })}
        />
        <br />
        <DatePicker
          {...init('time', {
            getValueFormatter: (value) => value.format('YYYY-MM-DD'),
            setValueFormatter: (value) => moment(value, 'YYYY-MM-DD')
          })}
        />
        <br />
        <pre style={{ marginTop: 8 }}>
          {JSON.stringify(this.field.getValues(), null, 2)}
        </pre>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
