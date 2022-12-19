import React, { useState } from 'react'
import { Select } from '@alicloud/console-components'
import {
  XConsoleTheme,
  HybridCloudLightTheme,
  HybridCloudDarkTheme,
} from '@alicloud/console-components-console-menu'

const dataSource = [
  // WindTheme不需要wrapper，因为默认就是wind theme
  { value: 'WindTheme', wrapper: (props: any) => props.children },
  { value: 'XConsoleTheme', wrapper: XConsoleTheme },
  { value: 'HybridCloudLightTheme', wrapper: HybridCloudLightTheme },
  { value: 'HybridCloudDarkTheme', wrapper: HybridCloudDarkTheme },
]

export function useTheme() {
  const [current, set] = useState(dataSource[0])

  console.log('dataSource', dataSource, current)
  const switchUI = (
    <Select
      onChange={(_1, _2, v) => set(v)}
      dataSource={dataSource}
      value={current.value}
    >
      {/* {themes.map((t) => {
        return <Select.Option value={t} key={t.name}>{t.name}</Select.Option>
      })} */}
      {/* <Select.Option value={{}}>jack1</Select.Option>
      <Select.Option value={{}}>jack2</Select.Option>
      <Select.Option value="jack3">jack3</Select.Option> */}
    </Select>
  )

  return { switchUI, current }
}
