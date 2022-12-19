# @alicloud/console-components-data-fields

一个`rc-data-fields`组件展示一个 dataSource 对象中的**多个字段**。每个字段区域由一个【label 区域】和一个【value 区域】组成。

## 基本用法

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-data-fields-docs&entryKey=basic/index)

## APIs

DataFields 组件接受的 Props：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-data-fields-docs&entryKey=types/IDataFieldsProps)

每个字段（[数组项](#IDataFieldsProps.items)）的定义格式如下：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-data-fields-docs&entryKey=types/IItemProps)

其他字段会被传入包裹【这个字段】的`Grid.Col`组件，比如传入 span={12}来让该字段占据一半宽度。
