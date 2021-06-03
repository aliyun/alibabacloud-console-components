import React, { useState } from 'react'
import { Select } from '@alicloud/console-components'
import {
  XConsoleTheme,
  HybridCloudDarkTheme,
  HybridCloudLightTheme,
} from '@alicloud/console-components-app-layout'
import {
  XConsoleTheme as XConsoleThemeMenu,
  HybridCloudDarkTheme as HybridCloudDarkThemeMenu,
  HybridCloudLightTheme as HybridCloudLightThemeMenu,
} from '@alicloud/console-components-console-menu'

const dataSource = [
  {
    // WindTheme不需要wrapper，因为默认就是wind theme
    value: 'WindTheme',
    wrapper: ({ children }: any) => children,
  },
  {
    value: 'XConsoleTheme',
    wrapper: ({ children }: any) => {
      return (
        <XConsoleTheme>
          <XConsoleThemeMenu>{children}</XConsoleThemeMenu>
        </XConsoleTheme>
      )
    },
  },
  {
    value: 'HybridCloudDarkTheme',
    wrapper: ({ children }: any) => {
      return (
        <HybridCloudDarkTheme>
          <HybridCloudDarkThemeMenu>{children}</HybridCloudDarkThemeMenu>
        </HybridCloudDarkTheme>
      )
    },
  },
  {
    value: 'HybridCloudLightTheme',
    wrapper: ({ children }: any) => {
      return (
        <HybridCloudLightTheme>
          <HybridCloudLightThemeMenu>{children}</HybridCloudLightThemeMenu>
        </HybridCloudLightTheme>
      )
    },
  },
]

export function useTheme() {
  const [current, set] = useState(dataSource[0])

  const switchUI = (
    <Select
      onChange={(_1, _2, v) => set(v)}
      dataSource={dataSource}
      value={current.value}
    />
  )

  return { switchUI, current }
}
