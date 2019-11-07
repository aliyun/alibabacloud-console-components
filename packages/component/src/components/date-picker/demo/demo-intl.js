import React from 'react'
import { DatePicker, ConfigProvider } from '@alicloud/console-components'
import moment from 'moment'

const { RangePicker } = DatePicker
const onChange = val => console.log(val)

const currentTime = moment()

const defaultValue = moment(currentTime)
defaultValue.locale('zh-CN')

const defaultValues = [
  currentTime,
  currentTime.add('day', 1)
]

const Demo1 = () => (
  <div>
    <DatePicker onChange={onChange} defaultValue={defaultValue} showTime />
    <br /><br />
    <ConfigProvider locale={{ momentLocale: 'fr' }}>
      <RangePicker
        defaultValue={defaultValues}
        onChange={onChange}
        showTime={{ format: 'HH:mm', minuteStep: 1 }}
      />
    </ConfigProvider>
  </div>
)

export default Demo1
