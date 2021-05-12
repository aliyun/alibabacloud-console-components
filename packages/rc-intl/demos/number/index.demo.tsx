/**
* @title number
*/

import React from 'react'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

const money = 1000.099

const App: React.FC<{}> = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <h2>intl.number（格式化number）</h2>
      <h2>自动使用`locale`环境下的展示习惯进行格式化</h2>
      <p>原始的：{money}</p>
      <p>格式化后的：{intl.number(1000.099)}</p>
      <h2>格式化为货币格式展示</h2>
      <p>
        格式化为日元货币格式：
        {intl.number(1000.099, {
          style: 'currency',
          currency: 'JPY',
        })}
      </p>
      <p>
        格式化为人民币货币格式：
        {intl.number(1000.099, {
          style: 'currency',
          currency: 'RMB',
        })}
      </p>
    </div>
  )
}

export default intl.withProvider()(App)
