# @alicloud/console-components-data-fields

一个`rc-data-fields`组件展示一个 dataSource 对象中的**多个字段**。每个字段区域由一个【label 区域】和一个【value 区域】组成。

## 基本用法

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-data-fields-docs&entryKey=basic/index)

## APIs

### RcDataFields
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-data-fields-docs&entryKey=types/IDataFieldsProps)

### RcDataFields.Item

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-data-fields-docs&entryKey=types/IItemProps)

---
**注：**
`ILabelProps`、`IValueProps`和`IItemProps` API 均继承自 [Fusion 中 Grid.Col API](https://fusion.design/pc/component/grid?themeid=2#Grid%20Col)

```TypeScript
import React from 'react'

import { Grid } from '@alicloud/console-components'

export default interface ILabelProps
  extends React.ComponentProps<typeof Grid.Col> {
  className?: string
}

export default interface IValueProps
  extends React.ComponentProps<typeof Grid.Col> {
  className?: string
}

export default interface IDataFieldsItem
  extends React.ComponentProps<typeof Grid.Col> {
    // ...
}
```
