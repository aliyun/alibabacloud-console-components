# @alicloud/console-components-truncate

用于截断超长文本。

## 基本用法

### 单行截断

比较常见的使用方式：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=basic)

根据容器的宽度自动截断：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=auto-width)

在宽度截断模式下，可以截断任何可渲染元素，不只是 string：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=non-string)

可以自定义省略符号。不过注意，如果省略符号不是`...`的话，会在**宽度截断模式**下造成“字符在中间被截断”（在浏览器中没办法支持那么“智能”的截断）：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=custom-omission)

每当 children 变化的时候，Truncate 会自动检查是否需要截断：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=dynamic-children)

可以自定义 tootip 的 max-width：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=tooltip-max-width)

设置 tooltip 样式：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=popupStyle)

### 多行截断

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=multi-lines)

想要做多行截断的时候，先考虑能否**通过普通的滚动来让用户浏览全部内容**。从用户体验的角度来看，后者的体验更好，无需使用多行截断。

## APIs

单行截断：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=types/ITruncateProps)

多行截断：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-truncate-docs&entryKey=types/IMultiLinesProps)
