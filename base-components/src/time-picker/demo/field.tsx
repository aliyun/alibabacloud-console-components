/**
 * @title 结合 Field 使用
 * @description 配合 Field 使用
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker, Field, Button } from '@alicloudfe/components'
import moment from 'moment'

class Demo extends React.Component {
  field = new Field(this)

  onClick = () => {
    const value = this.field.getValue('time-picker')
    console.log(value.format('HH:mm:ss'))
  }

  render() {
    const { init } = this.field

    const props = init('time-picker', {
      rules: [{ required: true, message: 'Time Required' }],
      initValue: moment('00:00:00', 'HH:mm:ss', true)
    })

    return (
      <div>
        <TimePicker {...props} /> <br />
        <br />
        <Button onClick={this.onClick}>Print Value in Console</Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
