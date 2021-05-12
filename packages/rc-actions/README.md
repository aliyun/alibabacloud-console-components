# @alicloud/console-components-actions

表格操作项。常用于表格中最右侧的操作列，用户通过表格操作项快速对该行条目进行操作。如果操作项超过3项（或自定义的阈值），超出的项会收起到“更多”菜单中。

## 使用示例

基本用法：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=basic)

当操作数量超过 threadhold 时，多出的操作会收敛在下拉菜单中：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=threshold)

visible 属性可以控制是否渲染这个操作项：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=visible)

使用 visible 的效果等同于`{showEdit && <LinkButton>编辑</LinkButton>}`。

自定义下拉按钮，`<LinkMore>`让你方便地定义标准化的下拉按钮：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=customExpandTrigger)

Actions 的 children 可以传入任意的 inline 元素，比如 button：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=customChildren)

FragmentDemo：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=fragment)

上面的 FragmentDemo 只是说明本组件对子组件中的 React.Fragment 的处理，无需特别关注。不建议在本组件中使用 React.Fragment。

控制 Actions 是否自动换行：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=wrap)

自定义下拉菜单的宽度

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=customWidth)

## APIs

### Actions

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=types/IActionsProps)

### LinkButton

`<LinkButton>`用于定义`<Actions>`中的操作按钮，默认继承`<button>`，经常使用的是`onClick`。也可以通过以下prop来改变渲染的组件：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=types/ILinkButtonProps)

使用LinkButton进行站外跳转，通过`props.Component`将`LinkButton`将被渲染为`<a>`

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=withHref)

使用LinkButton进行内跳转，通过`props.Component`将`LinkButton`将被渲染为`<Link />`

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-actions-docs&entryKey=withLink)

### LinkMore

`<LinkMore>`用于定义`<Actions>`中的下拉按钮，接受的 props 与普通的`<span>`相同，经常使用的是`onClick`。
