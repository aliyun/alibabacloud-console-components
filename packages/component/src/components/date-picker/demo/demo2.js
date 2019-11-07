import React from 'react'
import { DatePicker } from '@alicloud/console-components'
import moment from 'moment'

const { RangePicker } = DatePicker
const startValue = moment('2017-11-20', 'YYYY-MM-DD', true)
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true)

const Demo2 = () => (
  <div>
    <DatePicker defaultValue={startValue} />
     <br /><br />
    <RangePicker defaultValue={[startValue, endValue]} />
  </div>
)

export default Demo2