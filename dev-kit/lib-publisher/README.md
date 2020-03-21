---
name: lib-publisher
zhName: 文档构建发布
sort: 3
tags:
  dev-kit: true
  documentation: true
---

# @alicloud/console-components-lib-publisher

`@alicloud/console-components-lib-publisher`是 console-components 提供的物料开发者工具包。
它提供了以下脚本，来辅助物料开发、协作：

- cc-extract-api 它做了以下 3 件事情：
  - 使用[api-extractor](https://api-extractor.com/pages/overview/intro/)，读取`lib/index.d.ts`（即`tsc`的输出），提取 ts 代码中的类型、注释信息。输出到`cc-dev-out/api-extractor/`目录。
  - 然后，`dev-kit/api-documenter`会将上述输出信息加工成 json 数据，作为 API 文档的数据。输出到`cc-dev-out/api-json/`目录。因此，业务组件的 API 文档由源码转化而成，而不是人工维护，避免文档腐化
  - 以`lib/index.d.ts`为入口，将`.d.ts`声明文件打包（类似于 webpack 打包 js 模块），输出到`cc-dev-out/index.d.ts`，在此过程中，被声明为`@internal`和`@alpha`的 ts 类型、接口成员会被过滤掉。你可以利用这一点来避免不稳定的 ts 接口暴露给用户，提高封装性。详见[api-extractor 文档](https://api-extractor.com/pages/overview/demo_rollup/)。
- cc-build-doc 将 markdown 文档打包成一个 js bundle。
  - 构建成 js bundle 的好处是便于分发和扩展。各种基于 markdown 的扩展（demo 嵌入、ts Interface 渲染、图片内联、目录生成）在构建阶段就已经被处理完毕，文档站点无需关注文档功能的编译和实现，**文档站点可以将一篇文档当做一个普通 React 组件来加载、渲染**。未来我们向 markdown 语法加入更多扩展的时候，文档站点没有感知。
    > 详细的文档扩展能力说明，请参考 👉[文档能力](./doc-features)。
  - 一般的用法是将 markdown 构建成 bundle 以后，放在 npm 包中一起发布，文档站点通过 npm cdn（比如 unpkg）来加载文档。
- cc-doc-local-dev 本地开发、预览。
  - 既然已经可以将 markdown 文档打包成一个 js bundle，自然也就很容易实现本地开发模式（使用`webpack-dev-server`）。在这个模式下你可以快速预览渲染后的文档。我们会监听 markdown 文件的变更、src 代码的变更、demo 代码的变更，并自动刷新。
    > 目前，对 Typescript Interface 代码的修改，不会导致文档中渲染的 Interface 表格的热刷新。需要重新执行`npm run prepare && npm run doc:local-dev`
- cc-publish-preview 将当前的物料发布成一个预览包。
  - 预览包包括物料本身的运行代码，以及物料的文档 bundle
  - 通过临时 npm 账号将当前 package 发布到`@cc-dev-kit-test/${实际包名}`
  - 预览包发布成功以后，你会立刻得到一个 URL 分享链接。将 URL 分享给你的 UI 评阅者，评阅者用浏览器打开就能看到当前物料的文档。得益于文档的 Codesandbox Demo 能力、API 文档能力，这份文档能够快速地让评阅者了解、试用你开发的物料，无需切换代码分支、启动开发服务器等耗时的操作。
  - 请阅读 👉[文档评审](./doc-review)。

以上脚本工具都在物料包根目录（即 package.json 所在的目录）运行。使用他们的项目范例：[最小示例](https://github.com/aliyun/alibabacloud-console-components/blob/master/demo-workspaces/material-dev-kit-demo/component/package.json)、[Wind 物料的使用方式](https://github.com/aliyun/alibabacloud-console-components/blob/master/packages/rc-actions/package.json)。

> 本工具包只负责开发期的信息提取、构建、发布；运行时的加载、样式和功能放在[@alicloud/console-components-lib-documenter](./lib-documenter)包中。

## 为什么要选择打包文档

### 站点与文档扩展能力解耦

为了增强文档的表现能力和阅读体验，我们基于普通 Markdown 文档[做了很多扩展](./doc-features)。你编写的文档不局限于文本、HTML 的表现能力，它还能嵌入外部的非文本内容（提取源码中的 Interface 并渲染到文档上）、交互性内容（用户可编辑、试验的 Demo）。我们还会解析文档结构，自动生成文档目录。

如果将这些扩展交给文档站点来实现，会出现两个问题：

- 单一职责：文档站点就需要做很多文档粒度的事情（解析文档文本中的扩展语法指令、根据指令对文档进行转换、渲染），代码混杂在一起，无法专注于文档编排的本职工作。
- 文档不可复用：只有我们自己的文档站点能够渲染这种文档，因为一般的站点没有实现这些文档扩展。举个例子，目前 xconsole 的站点就有嵌入 console-components 文档的需求，因为 console-components 是 xconsole 设计规范的官方实现。

这就是为什么我们要把文档能力从站点解耦出来，提炼出`@alicloud/console-components-lib-publisher`工具包，它负责在**开发构建期间**辅助文档的编写和发布。与之对应的，`@alicloud/console-components-lib-documenter`负责在**运行期间**辅助文档的加载和渲染。

> **这个工具究竟实现了哪些文档功能，已经在 👉[文档能力](./doc-features)进行了详细说明**。本篇文档只阐述文档打包相关的重要特性。

解耦以后，`@alicloud/console-components-lib-publisher`在构建期解析文档文本，根据其中的指令对文档进行转换、渲染，输出成 JavaScript bundle，它导出一个 React 组件。文档站点只需要加载这个 bundle，然后像渲染普通 React 组件一样，将它渲染出来，就能够让用户看到表现形式丰富的文档。文档站点不需要知道这些表现能力是如何实现，专注于站点应用的实现，比如导航目录编排、页面搜索、文档分类等。

> `@alicloud/gatsby-theme-console-doc`就是这样一个文档站点框架，帮助开发者快速配置出一个功能丰富的文档站点。[本站点](https://aliyun.github.io/alibabacloud-console-components/guides/quick-start/)就是使用这个框架来配置出来的。

另一方面，其他文档站点（即使不使用我们提供的站点框架）也能渲染我们的文档，因为它已经被转换成一个普通的 React 组件。

### 文档可动态加载

通过加载 js bundle 的方式来加载文档，意味着你无需为文档站点实现任何后端数据服务。
你将文档站点构建好以后，部署到 cdn（比如使用免费的 unpkg）。静态站点在运行时从 cdn 加载文档 bundle。
当文档更新以后，你只需要重新构建、部署 cdn，你的文档站点就会加载到最新的文档，无需重新构建发布。
这样就在保持站点静态化（不依赖后端数据服务）的同时，做到了文档站点的实时更新。

### 承载本地图片

我们书写 markdown 文档的时候经常有一个痛点：**由于 markdown 是文本格式，它不能直接承载图片**，因此往往需要借助图床。但是图床嵌入图片的方式会遇到以下困扰：

- 操作太麻烦：上传到图床、拷贝 url、在 markdown 中插入图片`![altText](https://url.com)`
- 很难找到可靠（且免费）的图床，大部分免费的平台无法保证图片长期有效。如果图床突然删除了你的图片，你很可能再也找不回来（如果你自己没有备份的话）
- 便携性（portability）差：文档与平台绑定。虽然很多文档、博客平台提供了图床（比如语雀），但是把图片放在平台图床会让你的文档与图片在存储上分离，变得难以迁移

> 于此相反的是 Word 文档格式、PDF 格式，它们本身是二进制格式，能直接承载图片，不会有上述的困扰。

`@alicloud/console-components-lib-publisher`选择了 js bundle 作为文档的分发形式。js bundle 是一种非常便携的分发格式（类似于 PDF 文档）。利用 webpack 的一些 loader，它可以将本地的图片打包到 js bundle 中。因此，你的文本、demo 代码、图片等资源都一起存在本地仓库，本地仓库是"single source of truth"，可以通过 git 来存管和追踪。

以`.`开头的 url 视为相对路径，指向本地图片，会被打包到 js bundle 中（data-url 编码）。并且我们自动帮你做了图片压缩，以便减小 bundle size。
示例：`![aliyun](./assets/aliyun.png)`

其他的 url 视为普通外链 url，不会被打包。
示例：`![aliyun](https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png)`
