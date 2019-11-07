import React from 'react'
import { DatePicker } from '@alicloud/console-components'

const { RangePicker } = DatePicker
const onChange = val => console.log(val)

const Demo8 = () => (
  <div>
    <DatePicker format="YYYY-M-D" onChange={onChange} />
    <br /><br />
    <DatePicker format="YYYY-M-D" onChange={onChange} showTime={{ format: 'HH:mm' }} />
    <br /><br />
    <RangePicker format="YYYY-M-D" onChange={onChange} />
    <br /><br />
    <RangePicker format="YYYY-M-D" onChange={onChange} showTime={{ format: 'HH:mm' }} />
  </div>
)

export default Demo8