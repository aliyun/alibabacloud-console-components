import React from 'react'
import { Input } from '@alicloud/console-components'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

const messages = {
  'text.with.vars': 'This is a { type } text.',
  'text.with.condition.vars': `
    This is a { 
      type, select, simple { SIMPLE } vars { VARIABLES-INCLUDES } cond { CONDITIONAL-VARIABLES-INCLUDES }
    } text.`,
  'text.with.date': 'Current datetime is { current, date }',
  'text.with.number.and.plural': `You have { count, plural,
      =0 { no messages }
      =1 { only one message }
      =2 { two messages }
      other { # messages }
    }`,
}

intl.set({
  messages,
  locale: 'en-US',
})

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <h2>文案中使用变量</h2>
      <p>{intl('text.with.vars', { type: 'variables-includes' })}</p>
      <h2>intl中使用标签</h2>
      <p>
        {intl('text.with.vars', {
          type: <strong>component-variables-includes</strong>,
        })}
      </p>
      <h2>文案中使用select</h2>
      <p>{intl('text.with.condition.vars', { type: 'simple' })}</p>
      <p>{intl('text.with.condition.vars', { type: 'vars' })}</p>
      <p>{intl('text.with.condition.vars', { type: 'cond' })}</p>
      <h2>文案中使用日期</h2>
      <p>{intl('text.with.date', { current: new Date() })}</p>
      <h2>文案中使用plural</h2>
      <p>{intl('text.with.number.and.plural', { count: 0 })}</p>
      <p>{intl('text.with.number.and.plural', { count: 1 })}</p>
      <p>{intl('text.with.number.and.plural', { count: 2 })}</p>
      <p>{intl('text.with.number.and.plural', { count: 100 })}</p>
      <p>{intl('text.with.number.and.plural', { count: 1000 })}</p>
      <h2>intl中使用defaultMessage（当找不到文案时使用）</h2>
      <p>
        {intl({
          id: 'text.with.default.message',
          defaultMessage: 'This is a text with default message.',
        })}
      </p>
      <h2>intl中的defaultMessage使用变量</h2>
      <p>
        {intl({
          id: 'text.with.default.message.and.vars',
          defaultMessage: 'This is a text with {defaultMessage} and {vars}.',
          values: {
            defaultMessage: <strong>default message</strong>,
            vars: <Input />,
          },
        })}
      </p>
    </div>
  )
}

export default intl.withProvider()(App)
