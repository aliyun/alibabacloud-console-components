import React from 'react'
import { TimePicker } from '@alicloud/console-components'

const disabledHours = [1, 2, 3, 4, 5]
const disabledMinutes = [10, 20, 30, 40, 50]
const disabledSeconds = [10, 20, 30, 40, 50]

const disabledItems = (list) => (index) => {
  return list.indexOf(index) >= 0
}

const Demo5 = () => (
  <div>
    <p>Disable TimePicker</p>
    <TimePicker disabled />
    <p>Disable Hours/Minutes/Seconds</p>
    <TimePicker 
      disabledHours={disabledItems(disabledHours)} 
      disabledMinutes={disabledItems(disabledMinutes)} 
      disabledSeconds={disabledItems(disabledSeconds)} />
  </div>
)

export default Demo5