import React from 'react'
import { Pagination } from '@alicloud/console-components'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

const messages = {
  '@wind_v2.base.Pagination.next': 'Next page',
  '@wind_v2.base.Pagination.prev': 'Prev page',
}

intl.set({
  messages,
  locale: 'en-US',
})

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <h2>你可以覆盖wind组件的文案</h2>
      <p>
        通过在`intl.set`中设置`@wind_v2.base.Pagination.next`来改变分页组件的文案
      </p>
      <Pagination />
    </div>
  )
}

export default intl.withProvider()(App)
