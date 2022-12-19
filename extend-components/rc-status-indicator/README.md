# @alicloud/console-components-status-indicator

## 基本用法

指定 type 即可获得标准的状态指示器：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-status-indicator-docs&entryKey=basic)

圆点型指示器：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-status-indicator-docs&entryKey=dot)

> 建议遵循控制台视觉规范，使用默认的 icon 型指示器

自定义 icon：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-status-indicator-docs&entryKey=custom-icon)

## APIs

StatusIndicator 组件接受的 Props：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-status-indicator-docs&entryKey=types/IStatusIndicatorProps)

```ts
export type StatusType =
  | 'success'
  | 'warning'
  | 'error'
  | 'loading'
  | 'disabled'

export type ShapeType = 'dot' | 'icon'
```
