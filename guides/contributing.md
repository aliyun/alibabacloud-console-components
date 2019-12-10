---
name: contributing
zhName: 贡献指南
sort: 3
---

# 贡献指南

## 代码仓库组织结构

本仓库使用 [yarn workspaces](https://yarnpkg.com/en/docs/workspaces) + lerna 进行管理，是 monorepo 的结构。
将本仓库克隆到本地以后，执行`npm run bootstrap`即可完成项目的初始化。

> 初始化耗时较长，因为需要将所有 package 都构建一遍。

- 基础组件：在`packages/component`目录下。使用 webpack 来构建开发环境，进入`packages/component`目录并执行`npm run start`来启动。
- 业务组件：在`packages/rc-*`目录下。使用 storybook 作为开发环境，通过各个子 package 下的`npm run storybook`来启动。
- 文档站点：在`site`目录下。使用[gatsbyjs](https://www.gatsbyjs.org/)作为站点开发框架。通过`npm run start`来启动文档站开发环境。
- 开发指南：原文放在`guides`目录下（比如本指南）。开发指南会被`site`项目打包，在文档站点中展示。

## 开发期所需的依赖都安装在根项目

yarn workspaces 的两个概念：

- 根项目：monorepo 的根目录。
- 子项目：monorepo 的每个子 package。[定义在这里](https://github.com/aliyun/alibabacloud-console-components/blob/master/package.json#L4)。

新增业务组件时注意：**所有开发期所需的依赖都安装在根项目中**（比如 eslint、构建工具 breezr、@types/react），从而不需要每个子项目都维护一份自己的开发依赖，做到统一管理、升级。

增加新的`devDependencies`时，优先考虑安装在根项目（在根项目执行`yarn install -DW 开发期依赖`）。除非这个开发依赖比较特殊，只有某个子项目会用到。

如果你要在子包中使用根项目下安装的 cli 工具(比如 `breezr build`)，需要先在根项目执行`npm run link-bin`，将`/node_modules/.bin`下的工具 link 到所有子包中。

在 `npm run bootstrap` 时自动帮你执行了一次这个命令。如果你在执行 npm 命令的时候遇到了"command not found"错误，手动在根项目执行`npm run link-bin`即可。

## 开发指南

所有`package.json`都已经配置好`scripts`，新增业务组件时请仿照已有`package.json`的格式。

**提交前务必走一遍完整的编译、构建、信息提取流程，检查是否能顺利通过**。检查方式：到对应子包下运行`npm run prepublish`。

### 业务组件

- 使用 typescript 开发
- 使用 storybook 作为开发环境(`npm run storybook`)
- 使用[api-extractor](https://api-extractor.com/pages/overview/intro/)来过滤掉不希望用户使用的属性类型，并提取类型、注释信息。然后，`packages/api-documenter`会将这个信息加工成 json 数据，作为 API 文档的数据。因此，业务组件的 API 文档由源码转化而成，而不是人工维护，避免文档腐化
  - 需要暴露给用户的类型必须从`src/index.tsx?`导出，请模仿[已有组件](https://github.com/aliyun/console-components/blob/master/packages/rc-actions/src/index.tsx#L1)的做法
  - 在文档中嵌入 typescript interface 作为 API 说明，请模仿[已有文档](https://raw.githubusercontent.com/aliyun/alibabacloud-console-components/master/packages/rc-actions/README.mdx)，使用`MDXInstruction:renderInterface`指令：`[MDXInstruction:renderInterface:IActionsProps](./api-json/api.json)`。将其中的`IActionsProps`替换成你想要展示的 interface 名称
  - 在执行`npm run prepublish`的过程中，会从源码中提取 ts 类型信息（以`index.tsx?`为入口），输出到`./api-json/api.json`中。然后，当构建文档站点的时候，如果在 markdown 中遇到了`MDXInstruction:renderInterface`指令，则从`./api-json/api.json`根据 interface 名称拿到 interface 的成员信息，这个成员信息就是 API 文档的表格的数据
    - 请留意 prepublish 过程中`api-extractor`给出的提示，改善你的类型导出。比如，api-extractor 会帮助你发现忘记 export 的类型，解决方式就是在`index.tsx?`导出对应的类型，详见[api-extractor 文档](https://api-extractor.com/pages/messages/ae-forgotten-export/)
- README 使用[mdx](https://mdxjs.com/)来编写，并被文档站打包渲染
  - README 通过特殊的处理，使用特制的语法，可以嵌入 demo、渲染 typescript 类型信息作为文档说明。请参考[已有文档](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/rc-actions)的格式。

业务组件的典型目录树：

```text
.
├── api-temp/               api-extractor提取源码中的类型信息、注释信息，产生的原始数据。见package.json中的scripts
├── api-json/               wind-api-documenter加工api-temp/中的原始数据，产生json数据，供文档使用。见package.json中的scripts
├── lib/                    babel转译+cjs模块化的产物
├── es/                     babel转译+es模块化的产物
├── dist/                   webpack打包生成的umd bundle
├── src/
│   ├── styles/             将styled-components统一放在一个目录下，将样式与逻辑分离
│   └── tsconfig.json       src目录下的ts配置，继承../tsconfig.json。ts转译的时候以它为入口，避免转译到stories、tests之类的文件
├── stories/
│   ├── demo-name.tsx       一个demo，导出一个React组件，既被storybook使用，又可以被README.mdx渲染到文档中
│   └── index.stories.tsx   storybook的入口
├── api-extractor.json      api-extractor的配置
├── breezr.config.json      breezr的配置
├── tsconfig.json           主要用于配置ts的路径映射，继承根项目的tsconfig。主要是为了帮助vscode分析当前目录
├── package.json            里面定义了开发时要用到的各种工具命令
├── .npmignore              发布到npm时，忽略掉对使用者无用的目录
└── README.mdx              文档，既能在github上阅读，又能在文档站点中渲染。开头需要填写一些元数据
```

### 基础组件

- `npm run start`启动开发环境（通过原生 webpack 搭建）
- 基础组件文档的 API 部分完全拷贝自 fusion，通过[特制的 mdx 处理指令](https://github.com/aliyun/alibabacloud-console-components/blob/master/packages/component/src/components/button/README.md#apis)来抓取 mdx 的文档
- 基础组件包通过[一个脚本](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/component/scripts/publish-to-tnpm)来发布到内网（`@ali/wind`）

### 文档站

使用 gatsbyjs 进行开发。从而文档站是完全静态化的，所有数据在构建期间就被收集（从仓库中），在运行期间无需服务端提供数据

- 文档在代码仓库存放的位置：[指南文档](https://github.com/aliyun/alibabacloud-console-components/tree/master/guides)、[基础组件](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/component/src/components/button)、[业务组件](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/rc-actions)
- 文档能力已经抽离成一个通用的 gatsby 插件:[@alicloud/gatsby-theme-console-doc](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/gatsby-theme-console-doc)
- 文档 markdown 通过特殊的处理，使用特制的语法，可以嵌入 demo、渲染 typescript 注释作为文档说明。请参考[已有文档](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages/rc-actions)的格式
- 通过`npm run start`来启动文档站开发环境

## 代码规范

### 分支、提交规范

代码贡献流程：

1. fork 本仓库
2. 每个特性、修复都基于最新的 master 分支开始修改：`git checkout -b my-fix-branch master`
3. 要 commit 时，在根目录执行`npm run commit`，来**生成规范化的 commit message**
4. push 到远程之前，通过`git rebase master -i`将你分支上的多个 commit 合并成一个

> [git rebase 学习资料](http://jartto.wang/2018/12/11/git-rebase/)、[图解 git](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)、[git 远程操作详解](https://www.ruanyifeng.com/blog/2014/06/git_remote.html)

### 代码风格

项目根目录配置了 eslint 来检查整个项目的代码风格。当你用 vscode 打开这个项目的时候，vscode 会推荐安装一些插件（比如 eslint），你点击确定，就能自动安装所需的插件。如果没有合理的原因，不要忽略 eslint 的警告。

> 项目已经做了相关配置：在每次保存文件的时候会自动使用 eslint+prettier 进行格式化。

### 样式书写

样式全部使用 styled-components 来编写。并且，styled-components 的组件名称必须在开头加上`S`，以示区分。比如原本的`<div className="wind-selection-cointainer">`改为`<SSelectionCointainer>`。

### 透传 className 和 style

为了支持用户覆盖样式，每个面向用户的组件必须将 className 和 style 透传到该组件的根部 DOM 节点。然后，在一些内部的标志性的 DOM 节点上，添加语义化的类名，方便用户通过 css 选择器选中这个节点。注意类名中不要把前缀写死，见下一条。

### 不要写死类名前缀

我们允许用户是自定义**类名前缀**（默认前缀是`.next-`，比如`.next-button`）。因此，我们在写类名的时候，不能将前缀写死（比如`.next-button { color: red }`或者`<div className="wind-rc-table">`）。

- 在 scss 中，通过变量`$css-prefix`拿到前缀，[例子](https://github.com/aliyun/console-components/blob/master/packages/component/src/components/checkbox/index.scss#L3)
- 在 JavaScript 中，通过[这个 HOC](https://github.com/aliyun/console-components/blob/master/packages/internal-helpers/src/withWindConfig.tsx#L22)拿到全局配置，其中包含前缀。

### 对代码的修改需要带上 demo

demo 的作用：

- 在本地开发时，demo 可以帮助验证您的修改达到了预期的目标
- demo 也可以被渲染在文档站上，供用户学习使用新的特性
- demo 可以帮助我们发现代码退化（regression），避免之前修复过的问题重新出现、避免之前增加的特性被新的变更破坏

因此，对于组件行为有影响的代码修改，需要搭配 demo 一起提交。并且，每个 demo 需要在文件名、heading(`h2`)或注释上体现自己想要证明的行为。

## PR 贡献者必须签署 CLA 协议

在提交 PR 以后会出现一个 CLA 协议让提交者签署，未签署 CLA 协议的 PR 不会被合并。
