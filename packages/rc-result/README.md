# console-components-result

为阿里云控制台提供结果页组件

## Usage

```js
import React, { Fragmengt } from 'react';
import Result from '@alicloud/console-components-result';
import Info from '@alicloud/console-components-info';
import { Button } from '@alicloud/console-components';

export default () => (
  <Result 
    type="success"
    title="创建成功，标题居左对齐"
    description="描述内容，文案居左对齐，宽度根据文字内容自适应"
    actions={(
      <Fragment>
        <Button type="primary">去列表查看</Button>
        <Button>再次创建</Button>
      </Fragment>
    )}
  >
    <Info title="相关链接" />
  </Result>
)
```

## APIs
| 参数 | 类型 | 说明 |
|:--|:--|:--|
| type | type: 'success' | 'warning' | 'error'; | 定义结果类型。|
| title | title?: React.ReactNode; | 定义结果标题。 |
| description | description?: React.ReactNode; | 定义结果描述。 |
| actions | actions?: React.ReactNode; | 定义操作区域。 |
| children | children?: React.ReactNode;| 自定义部分。|