# @alicloud/console-components-page

为阿里云控制台或其他中后台系统提供基于页面的基础布局。这个组件一般配合 [@alicloud/console-components-app-layout](https://xconsole.aliyun-inc.com/nexconsole/component_web/rsfxoa) 一起使用。

> 如果您正在使用 XConsole 框架，那么 XConsole 会帮您应用这个组件，你不需要直接使用它；<br/>
> 如果您没有使用 XConsole 框架，而是单独使用`@alicloud/console-components`组件库，那么您需要自己应用它。

## 安装

```bash
tnpm i -S @alicloud/console-components-page
```

- 在计算 `<Page.Menu>` 的布局时使用了 `IntersectionObserver` API ，目前这个 API 已经于绝大多数的浏览器中得到实现，如果你期望你的布局在低版本的浏览器下可以运行（如 `Safari < 12.0`），你需要在项目的入口文件引入 polyfill: [intersection-observer](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

## 使用示例

### 基本使用

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=basic)

### 使用带有二级导航的页面布局

使用 `<Page.Content>` 的 `menu` 属性定义页面布局中的二级导航

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=with-menu)

### 自定义「返回上一级」按钮

在某些场景下，你可能希望对「返回上级」的行为进行深度的定制化，使用 `<Page.Header>` 的 `renderBackArrow` 属性可以帮助你实现这些自定义的行为，比如使用超链接包裹该按钮

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=with-custom-back-arrow-render)

### 根据容器宽度自动截断标题

当标题太长，以至于容器宽度不足以容纳的时候，会自动使用`@alicloud/console-components-truncate`组件对标题进行截断：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=long-title)

## APIs

### Page

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=types/IPageProps)

### Page.Header

定义页面中的头部内容，通常包括面包屑导航 / 页面标题等等

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=types/IHeaderProps)

### Page.Content

定义页面主体的内容

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-page-docs&entryKey=types/IContentProps)

### Page.Breadcrumb

用来定义位于`Page.Header`的面包屑导航。

该组件继承自 `@alicloud/console-components` 中的 `<Breadcrumb>` 组件，推荐使用它来定义 `Page.Header.breadcrumb` 属性的内容：

```javascript
import Page from '@alicloud/console-components-page'
import { Link } from 'dva/router'

const { Breadcrumb, Header } = Page

const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item key="home">
      <Link to="/home">首页</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item key="list">
      <Link to="/list">列表</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item key="detail">详情</Breadcrumb.Item>
  </Breadcrumb>
)

const Detail = () => (
  <Page>
    <Header breadcrumb={breadcrumb} title="详情" />
  </Page>
)
```

### Page.Menu

用来定义位于`Page.Content`的页面二级导航。

> 页面一级导航由 `@alicloud/console-components-app-layout` 组件来定义。

Page.Menu 下包括以下组件：

|      组件      |    继承自     |
| :------------: | :-----------: |
|   Page.Menu    |      Nav      |
|   Page.Item    |   Nav.Item    |
|   Page.Group   |   Nav.Group   |
|  Page.SubMenu  |  Nav.SubNav   |
| Page.PopupItem | Nav.PopupItem |
