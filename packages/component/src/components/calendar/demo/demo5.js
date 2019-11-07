import React from 'react'
import { Calendar } from '@alicloud/console-components'
import moment from 'moment'

function onDateChange(value) {
  console.log(value.format('L'))
}

const Demo5 = () => (
  <Calendar 
    onChange={onDateChange} 
    defaultVisibleMonth={() => moment('2018-01', 'YYYY-MM', true)} />
)

export default Demo5