import React from 'react'
import { Calendar } from '@alicloud/console-components'
import moment from 'moment'

const currentDate = moment()
const disabledDate = function (date) {
  return date.valueOf() > currentDate.valueOf()
}

const Demo3 = () => (
  <div className="wrapped-calendar">
    <Calendar disabledDate={disabledDate} shape="card" />
  </div>
)

export default Demo3