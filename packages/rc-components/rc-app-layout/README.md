# @alicloud/console-components-app-layout

基础的应用框架和布局。预留了 topBar 和 sideBar 的槽位，控制 sideBar 的展开与收起。

> 如果您正在使用 XConsole 框架，那么 XConsole 会帮您应用这个组件，你不需要直接使用它；<br/>
> 如果您没有使用 XConsole 框架，而是单独使用`@alicloud/console-components`组件库，那么您需要使用它。

## 使用示例

基本示例 1：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=basic/basic1)

基本示例 2：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=basic/basic2)

受控模式：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=controlled/controlled)

非受控模式：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=uncontrolled/uncontrolled)

## APIs

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=types/IAppLayoutProps)

### adjustHeight: 布局高度的调整

我们希望应用整体的高度恰好等于视窗高度，因此 AppLayout 的默认高度为 100vh。
但是对于【AppLayout 上方还有个顶栏】这种情况，如果仍然使用 100vh 来作为 Layout 布局组件的高度，则会导致应用的整体出现纵向滚动条，影响了页面的视觉感受。
为了适配这种特殊情况，我们提供了 adjustHeight 选项来调整 AppLayout 的高度：`height: calc(100vh - adjustHeight px)`。对于 AppLayout 上方有个顶栏的情况，我们可以将 adjustHeight 设置为顶栏高度，从而应用整体的高度恰好等于视窗高度。

- 当 adjustHeight 是 number 时，直接将 adjustHeight 带入该公式（单位为 px）计算最终的布局高度；
- 当 adjustHeight 是 string 时，组件会将该值作为参数来调用 document.getElementId(adjustHeight) || document.querySelector(adjustHeight)，并将该节点的高度作为 adjustHeight。
- 当 adjustHeight 是 function 时，组件会在每次渲染时调用这个函数，以它的返回结果作为 adjustHeight。

> 由于 AppLayout 组件在绝大多数情况下都是在控制台业务中使用，我们为`adjustHeight`设定了一个默认值：`'consoleBaseTopbarRoot'` ，即控制台顶部导航的容器节点的 id ，从而控制台开发者不需要特别关注 AppLayout 的高度。

## 其他主题

### 混合云亮色

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=hybridcloud-light/basic)

### 混合云暗色

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-app-layout-docs&entryKey=hybridcloud-dark/basic)
