import React from 'react'
import { TimePicker } from '@alicloud/console-components'

const Demo7 = () => (
  <TimePicker 
    onChange={(val) => console.log(val.format('HH:mm:ss'))} 
    hourStep={2} 
    minuteStep={5} 
    secondStep={5} />
)

export default Demo7
