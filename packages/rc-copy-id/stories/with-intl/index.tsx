import React from 'react'
import CopyId from '@alicloud/console-components-copy-id'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

intl.set({
  locale: 'zh',
})

const WithIntl: React.FC<{}> = () => {
  return (
    <div id="app-wrapper">
      <CopyId text id="内容内容内容">
        <div>内容内容内容</div>
      </CopyId>
    </div>
  )
}

export default intl.withProvider()(WithIntl)
