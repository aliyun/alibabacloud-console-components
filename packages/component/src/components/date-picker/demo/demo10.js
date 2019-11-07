import React from 'react'
import { DatePicker } from '@alicloud/console-components'

const { RangePicker } = DatePicker;

const Demo10 = () => (
  <div>
    <p>Change popup align</p>
    <DatePicker popupAlign="bl tl"  />
    <p>Change popup container</p>
    <RangePicker popupContainer={target => target.parentNode} />
  </div>
)

export default Demo10