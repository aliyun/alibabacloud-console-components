import React, { useState } from 'react'
import { Select } from '@alicloud/console-components'
import {
  XConsoleTheme,
  HybridCloudLightTheme,
  HybridCloudDarkTheme,
} from '@alicloud/console-components-console-menu'

const dataSource = [
  { value: 'XConsoleTheme', wrapper: XConsoleTheme },
  // WindTheme不需要wrapper，因为默认就是wind theme
  { value: 'WindTheme', wrapper: (props: any) => props.children },
  { value: 'HybridCloudLightTheme', wrapper: HybridCloudLightTheme },
  { value: 'HybridCloudDarkTheme', wrapper: HybridCloudDarkTheme },
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
