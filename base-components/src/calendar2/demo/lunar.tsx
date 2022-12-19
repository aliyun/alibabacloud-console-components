/**
 * @title 农历
 * @description 农历
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar2 } from '@alicloudfe/components'
import dayjs from 'dayjs'
import solarLunar from 'solarlunar'

function onDateChange(value) {
  console.log(value.format())
}

function dateCellRender(value) {
  const solar2lunarData = solarLunar.solar2lunar(
    value.year(),
    value.month(),
    value.date()
  )

  return (
    <div className="custom-cell">
      {value.date()}
      <span>
        {solar2lunarData.lDay === 1
          ? solar2lunarData.monthCn
          : solar2lunarData.dayCn}
      </span>
    </div>
  )
}

export default function DemoComponent() {
  const content = (
    <div>
      <Calendar2
        onSelect={onDateChange}
        dateCellRender={dateCellRender}
        defaultValue={dayjs().add(1, 'days')}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`
