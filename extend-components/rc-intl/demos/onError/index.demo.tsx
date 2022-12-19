/**
 * @title onError
 */

import React from 'react'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

export const messages = {
  'text.with.format': `身份：{value, select,
    actiontrail {ActionTrail 委派管理员}
    config {CloudConfig 委派管理员}
    yundun {云安全中心委派管理员}
    cloudfw {CloudFirewall 委派管理员}
    other {委派管理员}}`,
}

// 设置语言文案
intl.set({
  messages,
  locale: 'en-US',
})

// 可以注册多个onError回调，它们都会被调用
intl.registerOnError((info) => {
  console.log('get intl error1:', info)
  // onError可以返回fallback的文案
  // 如果多个onError都返回了fallback文案，则先注册的onError优先
  // 这一行的默认会优先与下一个onError的默认文案：
  // return 'unknown!'
})

intl.registerOnError((info) => {
  // 可以上报日志
  console.log('get intl error2:', info)
  // onError可以返回fallback的文案
  const ctx = info.ctx as any
  const value = ctx.values?.value || ctx.values?.state
  // 如果在values对象中有一些关键的属性，则可以用这些属性作为fallback
  if (typeof value === 'string') return value
  if (info.key) return `unknown message: ${info.key}`
})

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <p>发生错误时会调用onError回调，并从它获取默认文案：</p>
      <p>{intl('unknown.key')}</p>
      <p>你可以在onError回调中，利用上下文信息返回更有用的文案：</p>
      <p>{intl('unknown.key', { state: 'running' })}</p>
      <p>你可以在onError回调中，利用上下文信息返回更有用的文案：</p>
      <p>{intl('text.with.format。typo', { value: 'yundun' })}</p>
    </div>
  )
}

export default intl.withProvider()(App)
