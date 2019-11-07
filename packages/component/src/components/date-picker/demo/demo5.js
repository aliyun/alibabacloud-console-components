import React from 'react'
import { DatePicker } from '@alicloud/console-components'
import moment from 'moment'

const { RangePicker } = DatePicker
const currentDate = moment()

// Disable all dates before today
const disabledDate = function (date) {
    return date.valueOf() < currentDate.valueOf()
}

const Demo5 = () => (
  <div>
    <DatePicker disabledDate={disabledDate} onChange={val => console.log(val)} />
    <br /><br />
    <RangePicker disabledDate={disabledDate} onChange={val => console.log(val)} />
  </div>
)

export default Demo5