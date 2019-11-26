# @alicloud/console-components-description

为阿里云控制台提供信息描述组件。

## Usage

```js
import Description from '@alicloud/console-components-description';
import { Button } from '@alicloud/console-components'

const items = [
  {
    label: '实例 ID',
    dataIndex: 'InstanceId',
  },
  {
    label: '地域',
    dataIndex: 'RegionId',
    visible: false,
  },
  {
    label: '规格',
    dataIndex: 'Config',
    visible: (value) => value === 'xxxxx1',
  },
  {
    label: '创建时间',
    dataIndex: 'CreatedDate',
    visible: (value, dataSource) => dataSource.RegionId === 'cn-hanghou',
  },
]

const dataSource = {
  InstanceId: 'rds-xxxxx',
  RegionId: 'cn-hanghou',
  Config: 'xxxxx',
  CreatedDate: '2019-10-10',
}

export default () => (
  <Description
    title="实例详情"
    items={items}
    dataSource={dataSource}
    actions={<Button type='primary' text>编辑</Button>}
   />
)
```

## APIs
| 参数 | 类型 | 说明 |
|:--|:--|:--|
| title | title?: ReactNode; | 定义描述信息标题。|
| items | items?: Array<IDataFieldItemProps>; | 定义描述信息展示项。 |
| dataSource | dataSource?: Array<any>; | 定义展示项数据。 |
| actions | actions?: React.ReactNode; | 定义标题右侧操作区。|
| extra | extra?: React.ReactNode; | 额外内容 |

```
interface IDataFieldItemProps {
  label?: ReactNode;
  dataIndex?: string;
  labelLayout?: any;
  valueLayout?: any;
  render?: (value: any) => ReactElement;
  visible?: boolean | ((value?: any, dataSource?: {}) => boolean);
  children?: ReactNode;
}
```