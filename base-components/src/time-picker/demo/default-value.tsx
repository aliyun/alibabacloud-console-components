/**
 * @title 默认值
 * @description 可以通过 `defaultValue` 传入默认时间值，并且可以通过选择改变该值。`onChange` 回调参数的值的类型取决于 `defaultValue` 的类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alicloudfe/components'
import moment from 'moment'

const defaultVal = moment('12:00:00', 'HH:mm:ss', true)

export default function DemoComponent() {
  const content = (
    <div>
      <TimePicker
        defaultValue={defaultVal}
        onChange={(val) => console.log(val)}
      />
      <br />
      <br />
      <TimePicker
        defaultValue="12:00:00"
        onChange={(val) => console.log(val)}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
