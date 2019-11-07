import React from 'react'
import { TimePicker } from '@alicloud/console-components'
import moment from 'moment'

const defaultVal = moment('12:00:00', 'HH:mm:ss', true)

const Demo2 =() => (
  <div>
    <TimePicker defaultValue={defaultVal} onChange={(val) => console.log(val)} /><br /><br />
    <TimePicker defaultValue="12:00:00" onChange={(val) => console.log(val)} />
  </div>
)

export default Demo2