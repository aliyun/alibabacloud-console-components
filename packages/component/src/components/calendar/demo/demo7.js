import React from 'react'
import { Calendar } from '@alicloud/console-components'
import moment from 'moment'

// Setting moment locale to Chinese
moment.locale('zh-cn')

function onDateChange(value) {
  console.log(value.format('L'))
}

const Demo7 = () => (
  <Calendar onChange={onDateChange} />
)	

export default Demo7
