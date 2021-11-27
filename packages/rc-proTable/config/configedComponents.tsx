import React from 'react'
export * from '@alicloud/console-components'

import { ConfigProvider } from '@alicloud/console-components'

import '@alicloud/console-components/dist/xconsole.css?fusionPrefix=.xdemo-'

/**
 * 额外提供 ConfigWrapper 组件，用来配置fusion前缀
 */
export const ConfigWrapper = ({ children }: any) => {
  return (
    <ConfigProvider prefix="xdemo-">
      <>{children}</>
    </ConfigProvider>
  )
}
