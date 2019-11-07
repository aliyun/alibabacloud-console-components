import React from 'react'
import { DatePicker } from '@alicloud/console-components'

const { RangePicker } = DatePicker
const onChange = val => console.log(val)

const Demo1 = () => (
  <div>
    <DatePicker onChange={onChange} /> 
    <br /><br />
    <RangePicker onChange={onChange} />
  </div>
)

export default Demo1
