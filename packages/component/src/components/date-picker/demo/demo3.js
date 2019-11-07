import React from 'react'
import { DatePicker } from '@alicloud/console-components'
import moment from 'moment'

const { RangePicker } = DatePicker

const Demo3 = () =>(
  <div>
    <p>Setting last month as default visible month</p>
    <DatePicker defaultVisibleMonth={() => moment().add(-1, 'months')} />
    <br /><br />
    <RangePicker defaultVisibleMonth={() => moment().add(-1, 'months')} />
  </div>
)

export default Demo3