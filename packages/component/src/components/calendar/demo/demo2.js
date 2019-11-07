import React from 'react'
import { Calendar } from '@alicloud/console-components'
import moment from 'moment'
import './demo2.less'

function onDateChange(value) {
  console.log(value)
}

const Demo2 = () => (
  <div className="wrapped-calendar">
    <Calendar onSelect={onDateChange} shape="card" />
  </div>
)

export default Demo2