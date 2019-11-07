import React from 'react'
import { TimePicker } from '@alicloud/console-components'

const Demo6 =() => (
  <div>
    <p>Hide seconds</p>
    <TimePicker format="HH:mm" />
    <p>Hide hours</p>
    <TimePicker format="mm:ss" />
  </div>
)

export default Demo6