import React, { useState, useEffect, useCallback } from 'react'
import { Select } from '@alicloud/console-components'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const { Option } = Select

const intl = reactIntlFactory()

const date = new Date()
const timestamp = date.getTime()
const consoleTimestamp = '2019-01-01T00:00Z'

intl.set({
  locale: 'zh-CN',
})

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>展示日期和时间</h2>
      <p>{intl.date(new Date('2024-01-24 00:24:24'))}</p>
      <h2>只展示日期</h2>
      <p>{intl.date(new Date('2024-01-24 00:24:24'), 'date')}</p>
      <h2>只展示时间</h2>
      <p>{intl.date(new Date('2024-01-24 00:24:24'), 'time')}</p>
      <h2>展示TimeZone</h2>
      <p>
        {intl.date(new Date('2024-01-24 00:24:24'), 'dateTimeWithTimeZone')}
      </p>
      <h2>处理标准时间对象 (Native JavaScript `Date` object)</h2>
      <p>原始的：{String(date)}</p>
      <p>处理后：{intl.date(date)}</p>
      <h2>处理Unix时间戳 (11-digits number)</h2>
      <p>原始的：{timestamp}</p>
      <p>处理后：{intl.date(timestamp)}</p>
      <h2>处理控制台时间戳 (yyyy-MM-ddThh:mmZ)</h2>
      <p>原始的：{consoleTimestamp}</p>
      <p>处理后：{intl.date(new Date(consoleTimestamp))}</p>
    </div>
  )
}

export default intl.withProvider()(App)
