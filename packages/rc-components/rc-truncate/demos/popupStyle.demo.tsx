/**
* @title popupStyle
*/

import React from 'react'
import Truncate from '@alicloud/console-components-truncate'
import { createGlobalStyle } from 'styled-components'

const sentence =
  'texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext'

const GlobalStyle = createGlobalStyle`
	.wind-truncate-tooltip {
		word-break: break-all;
	}
`

const Demo = () => {
  return (
    <div className="truncate-demo">
      <h1>设置popupStyle</h1>
      <div>通过设置popupStyle使tooltip在英文状态下换行</div>
      <br />
      <Truncate popupStyle={{ wordBreak: 'break-all' }} threshold={50}>
        {sentence}
      </Truncate>
      <h1>设置popupClassName</h1>
      <div>通过设置popupClassName使tooltip在英文状态下换行</div>
      <br />
      <GlobalStyle />
      <Truncate popupClassName="wind-truncate-tooltip" threshold={50}>
        {sentence}
      </Truncate>
    </div>
  )
}

export default Demo
