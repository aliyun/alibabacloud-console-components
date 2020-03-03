import React from 'react'
import { Pagination, Input } from '@alicloud/console-components'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

const date = new Date()
const rawDate = date.toString()
const timestamp = date.getTime()
const consoleTimestamp = '2019-01-01T00:00Z'

const messages = {
  'text.normal': 'This is a normal text.',
  'text.normal.with.non.runtime': 'This is a normal text with non-runtime.',
  'text.normal.with.chinese': '这是一段优美的文字',
}

// 设置语言文案
intl.set({
  messages,
})

const normalTextWithNonRuntime = intl('text.normal.with.non.runtime')

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <h2>基本用法</h2>
      <p>{intl('text.normal')}</p>
      <p>{normalTextWithNonRuntime}</p>
      <p>{intl('text.normal.with.chinese')}</p>
    </div>
  )
}

export default intl.withProvider()(App)
