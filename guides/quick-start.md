---
name: quick-start
zhName: 快速开始
sort: 2
---

# 快速开始

## 使用基础组件

使用[create-react-app](https://github.com/facebook/create-react-app)创建一个项目：

```sh
npx create-react-app my-app
cd my-app
```

安装依赖：

```sh
yarn add @alicloud/console-components moment styled-components
```

其中，`moment` 和 `styled-components` 是 wind 的 peerDependencies。

在应用入口(index.js)引入 wind 的样式：

```jsx
import '@alicloud/console-components/dist/wind.css'
```

导入组件并使用：

```jsx
// ...
import { Button } from '@alicloud/console-components'
// ...
// 在jsx中使用：
function App() {
  return (
    <div className="App">
      <h1>Wind Demo</h1>
      <Button type="primary">Button works!</Button>
    </div>
  )
}
```

## 使用业务组件

为了方便用户独立升级不同的业务组件，每个业务组件对应一个 npm package。

如果发现有业务组件恰好能够满足你的需求，安装并使用即可：

```sh
npm install -S @alicloud/console-components-app-layout @alicloud/console-components-console-menu
```

```jsx
// ...
import WindAppLayout from '@alicloud/console-components-app-layout'
import WindConsoleMenu from '@alicloud/console-components-console-menu'
// ...
// 在jsx中使用：
const navMenu = (
  <WindConsoleMenu
    items={[
      {
        key: 'overview',
        label: '概览',
      },
    ]}
    header="页面一级导航"
  />
)
function App() {
  return (
    <div className="App">
      <WindAppLayout nav={navMenu}>
        页面内容：
        <Button type="primary">使用Button</Button>
      </WindAppLayout>
    </div>
  )
}
```

## 最小使用示例

[![Edit wind-demo-basic](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/csr632/wind-demo-basic/tree/master/?fontsize=14)
