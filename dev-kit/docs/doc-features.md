---
name: doc-features
zhName: 文档特性
sort: 2
tags:
  dev-kit: true
  documentation: true
---

# 文档特性

## 在文档中嵌入 Tyescript Interface

使用`MDXInstruction:renderInterface`指令。比如`[MDXInstruction:renderInterface:IActionsProps](./src/index.tsx)`。

渲染结果是一个 Table：

![interface](./assets/interface.png 'TS interface嵌入结果')

其中包括 Interface 各种属性的名称、类型、注释说明、默认值。

这个能力常常被用来展示接口规范。比如 React 组件的 props，在项目中使用 Typescript Interface 来做类型检查，约束用户传入的类型。cc-dev-kit 让你能够直接将源码中的 Typescript Interface 渲染到文档中，从而让你无需在文档中手动维护一份文字版本的接口规范。

### 规范

- 将其中的`IActionsProps`替换成你想要展示的 Interface 名称。
- 其中的 URL 部分随意，建议通过相对路径指向 Interface 所在的文件。
- 被展示的 Interface 必须从项目的`src/index.ts`export 出来（可以是 re-export）。参考[已有组件的做法](https://github.com/aliyun/alibabacloud-console-components/blob/master/packages/rc-actions/src/index.tsx)

> 这样设计的好处是，这个指令在[被普通 markdown 渲染器渲染的时候](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/rc-actions)，也拥有良好的阅读体验。点击链接能够跳转到 Interface 定义文件。

## 在文档中嵌入 Demo

使用`MDXInstruction:importDemo`指令。比如`[MDXInstruction:importDemo:BasicDemo](./stories/basic.tsx)`

渲染效果是一个卡片：

- 主体部分是 demo 的渲染结果
- 卡片下方有一个展开/收起按钮，点击后可以通过 codesandbox 实时编辑 demo，查看效果

![demo](./assets/demo.png 'Demo嵌入结果')

我们在开发的过程中经常会写一两个小 Demo 来验证变更的结果。cc-dev-kit 让你能够将 Demo 渲染到文档中，作为文档说明的重要补充。
一方面，demo 被直接渲染在文档中；另一方面， demo 可以通过 codesandbox 来实时编辑，方便读者分试验、分享。

### 规范

- 其中的`BasicDemo`是 demo 的名称（保证在该文档内不重复即可）。
- 其中`./stories/basic.tsx`是指向【Demo 模块】的路径。【Demo 模块】遵循下面描述的《Demo 模块规范》。

> 这样设计的好处是，这个指令在[被普通 markdown 渲染器渲染的时候](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/rc-actions)，也拥有良好的阅读体验。点击链接能够跳转到 Demo 定义文件。

### Demo 模块规范

Demo 模块的规范：

- 是一个 js 或 ts 模块，使用[ES2015 模块化规范](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)。
- 应该 import 并使用物料，向你的用户展示正确的 import、使用方式。比如`import Actions, { LinkButton } from '@alicloud/console-components-actions'`。路径应该使用正式包名，而不能使用相对路径`../src/index.tsx`。
  - Demo 应该只 import `当前物料包`、`react`、`styled-components`，尽量不要 import 其他外部包（会让你的文档 bundle size 增加）。
  - 支持相对路径 import，但是不要滥用。仅用于 import 一些 demo 共享的工具函数，比如`import { Container } from './styles'`。最多只能上探一个目录层级，比如`import util from '../util'`。
- 模块的`default export`是一个 React 组件。它就是要展示的 Demo。
- 【可选】模块可以`export const demoMeta = { zhName: 'xxx', zhDesc: 'yyy' }`。提供模块的描述信息。文档站点会读取这个描述信息，并用一致的方式渲染在 Demo 上方。

[示例](https://github.com/aliyun/alibabacloud-console-components/blob/master/packages/rc-actions/stories/basic.tsx)。

这样设计的好处是，我们的 Demo 模块实际上是兼容 [storybook 的 story 模块规范](https://storybook.js.org/docs/formats/storiesof-api/)的（storybook 是当前社区最广泛采纳的 UI 组件开发环境）。
也就是说，现在每个 demo 模块都可以有 2 个用途：

- 按照本文档的描述，嵌入到 markdown 文档中，最终在你的文档站点渲染一个 Demo 卡片。
- 将它作为 storybook 的用例(story)。本地开发 UI 组件时可以使用 storybook 作为开发环境。

## 自动生成标题跳转锚点、文档目录结构

社区上一些体验比较好的文档都支持**标题级别的链接跳转**（比如 React 文档）。我们的文档工具也支持这个特性：

- 当鼠标 hover 到文档标题的时候会看到一个链接标识，它会告诉你直接跳转到这个标题的链接。通过分享这个链接，可以让读者直接来到这个标题，不需要从头开始看起
- 在编写 markdown 文档的时候，可以使用`[链接](#文档特性)`来引用文档的另一个部分。读者点击[链接](#文档特性)可以快速跳转到被引用点

更进一步，我们的工具还会解析 markdown 内容，自动生成文档目录结构（Table of Content），悬停在文档右侧，用户可以一眼看到整篇文档的大纲，并且可以通过它随时跳转到任意章节。在文档滚动的过程中，右侧目录会**自动高亮当前正在浏览的章节**。

## 其它细节

你可以从这篇文档发现，我们会根据当前的窗口高度、文档内容高度，自动在文档底部填充空间，使得视窗能够完全滚动到最后一个标题的位置。

> 如果你的页面已经有 Footer，可以给文档组件传入`autoPadding={false}`来关闭这个特性。
