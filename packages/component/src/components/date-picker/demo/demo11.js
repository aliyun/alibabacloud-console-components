import React from 'react'
import { DatePicker } from '@alicloud/console-components'

const { RangePicker } = DatePicker

function footerRender() {
  return <div className="custom-footer">👍 Some useful info here</div>
}

const Demo11 = () => (
  <div>
    <DatePicker footerRender={footerRender}  />
    &nbsp;&nbsp;
    <RangePicker footerRender={footerRender} />
  </div>
)

export default Demo11