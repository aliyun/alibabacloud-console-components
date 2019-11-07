import React from 'react'
import { Calendar } from '@alicloud/console-components'
import moment from 'moment'

function onDateChange(value) {
  console.log(value.format('L'))
}

const Demo1 = () => (
  <div>
    <Calendar onSelect={onDateChange} defaultValue={moment().add(1, 'days')} />
  </div>
)

export default Demo1