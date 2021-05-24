/**
 * @title date
 */

import React from 'react'
import { reactIntlFactory, presets } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

const date = new Date()
const timestamp = date.getTime()
const consoleTimestamp = '2019-01-01T00:00Z'

intl.set({
  locale: 'en-US',
  // locale: 'zh-Hans-CN',
})

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>处理标准时间对象 (Native JavaScript `Date` object)</h1>
      <h2>展示日期和时间</h2>
      <p>{intl.date(date)}</p>
      <h2>展示日期和时间（不含秒）</h2>
      <p>
        {intl.date(date, {
          ...presets.dateTime,
          second: undefined,
        })}
      </p>
      <h2>只展示日期</h2>
      <p>{intl.date(date, 'date')}</p>
      <h2>只展示时间</h2>
      <p>{intl.date(date, 'time')}</p>
      <h2>展示TimeZone</h2>
      <p>{intl.date(date, 'dateTimeWithTimeZone')}</p>
      <h1>处理Unix时间戳 (11-digits number)</h1>
      <p>原始的：{timestamp}</p>
      <p>处理后：{intl.date(timestamp)}</p>
      <h1>处理控制台时间戳 (yyyy-MM-ddThh:mmZ)</h1>
      <p>原始的：{consoleTimestamp}</p>
      <p>处理后：{intl.date(new Date(consoleTimestamp))}</p>
    </div>
  )
}

export default intl.withProvider()(App)
