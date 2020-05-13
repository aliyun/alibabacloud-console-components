# @alicloud/console-components-actions

表格中的行操作器

## 使用示例

基本用法：

[MDXInstruction:importDemo:BasicDemo](./stories/basic.tsx)

当操作数量超过 threadhold 时，多出的操作会收敛在下拉菜单中：

[MDXInstruction:importDemo:ThreadholdDemo](./stories/threshold.tsx)

visible 属性可以控制是否渲染这个操作项：

[MDXInstruction:importDemo:VisibleDemo](./stories/visible.tsx)

使用 visible 的效果等同于`{showEdit && <LinkButton>编辑</LinkButton>}`。

自定义下拉按钮，`<LinkMore>`让你方便地定义标准化的下拉按钮：

[MDXInstruction:importDemo:CustomExpandTriggerDemo](./stories/customExpandTrigger.tsx)

Actions 的 children 可以传入任意的 inline 元素，比如 button：

[MDXInstruction:importDemo:CustomChildrenDemo](./stories/customChildren.tsx)

FragmentDemo：

[MDXInstruction:importDemo:FragmentDemo](./stories/fragment.tsx)

上面的 FragmentDemo 只是说明本组件对子组件中的 React.Fragment 的处理，无需特别关注。不建议在本组件中使用 React.Fragment。

控制 Actions 是否自动换行：

[MDXInstruction:importDemo:WrapDemo](./stories/wrap.tsx)

自定义下拉菜单的宽度

[MDXInstruction:importDemo:CustomWidthDemo](./stories/customWidth.tsx)

## APIs

### Actions

[MDXInstruction:renderInterface:IActionsProps](./api-json/api.json)

### LinkButton

> 继承`@alicloud/console-components-button`中的`LinkButton`的API

`<LinkButton>`用于定义`<Actions>`中的操作按钮，接受的 props 与普通的`<span>`相同，经常使用的是`onClick`。

使用LinkButton进行站外跳转，通过`props.Component`将`LinkButton`将被渲染为`<a />`

[MDXInstruction:importDemo:WithHref](./stories/WithHref.tsx)

使用LinkButton进行内跳转，通过`props.Component`将`LinkButton`将被渲染为`<Link />`

[MDXInstruction:importDemo:WithLink](./stories/WithLink.tsx)

### LinkMore

`<LinkMore>`用于定义`<Actions>`中的下拉按钮，接受的 props 与普通的`<span>`相同，经常使用的是`onClick`。
