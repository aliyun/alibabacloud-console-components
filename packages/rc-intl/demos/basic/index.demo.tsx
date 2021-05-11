/**
* @title basic
*/

import React from 'react'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

export const messages = {
  'text.normal': 'This is a normal text.',
  'text.normal.with.non.runtime': 'This is a normal text with non-runtime.',
  'text.normal.with.chinese': '这是一段优美的文字',
  'text.with.html': 'This is <span style="color: red">{text}</span> text.',
}

// 设置语言文案
intl.set({
  messages,
  locale: 'en-US',
})

const normalTextWithNonRuntime = intl('text.normal.with.non.runtime')

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <h2>基本用法</h2>
      <p>{intl('text.normal')}</p>
      <p>{normalTextWithNonRuntime}</p>
      <p>{intl('text.normal.with.chinese')}</p>
      <p>intl.html将包含html标签的文案渲染输出。注意防范XSS攻击。</p>
      <p>{intl.html('text.with.html', { text: 'my html' })}</p>
    </div>
  )
}

export default intl.withProvider()(App)
