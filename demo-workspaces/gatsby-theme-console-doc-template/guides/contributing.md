---
name: contributing
zhName: 贡献指南
---

# 贡献指南

## 代码仓库组织结构

本仓库使用 yarn workspace + lerna 进行管理，是 monorepo 的结构。
将本仓库克隆到本地以后，执行`npm run bootstrap`即可完成项目的初始化。

> 初始化耗时较长，因为需要将所有 package 都构建一遍。

- 基础组件：在`packages/component`目录下。使用 webpack 来构建开发环境，进入`packages/component`目录并执行`npm run start`来启动。
- 业务组件：在`packages/rc-*`目录下。使用 storybook 作为开发环境，通过各个子 package 下的`npm run storybook`来启动。
- 文档站点：在`site`目录下。
- 开发指南：原文放在`guides`目录下（比如本指南）。开发指南会被`site`项目打包，在文档站点中展示。

## 所有开发期所需的依赖都安装在根目录

新增业务组件时注意：**所有开发期所需的依赖都安装在根目录中**（比如 eslint、构建工具 breezr、@types/react），从而不需要每个子目录都维护一份自己的开发依赖，做到统一管理、升级。
如果你要在子包中使用根目录下安装的 cli 工具(比如 `breezr build`)，需要先在根目录执行`npm run link-bin`，将`/node_modules/.bin`下的工具 link 到所有子包中。

这个命令在 `npm run bootstrap` 时自动帮你执行了，当你遇到**"command not found"**错误的时候，手动在根目录执行`npm run link-bin`即可。

## 开发工具

所有`package.json`都已经配置好`scripts`，新增业务组件时请仿照已有`package.json`的格式。

- 业务组件：
  - 使用 typescript 开发
  - 使用 storybook 作为开发环境(`npm run storybook`)
  - 使用[api-extractor](https://api-extractor.com/pages/overview/intro/)来过滤掉不希望用户使用的属性类型，并提取类型、注释信息。然后，`packages/api-documenter`会将这个信息加工成 json 数据，作为 API 文档的数据。因此，业务组件的 API 文档由源码转化而成，而不是人工维护，避免文档腐化
    > 需要暴露给用户的类型必须从`src/index.tsx?`导出，请模仿[已有组件](https://github.com/aliyun/console-components/blob/e971f40eb0b185559226d71952d950b3fbf87a50/packages/rc-actions/src/index.tsx#L1)的做法
  - README 使用[mdx](https://mdxjs.com/)来编写，并被文档站打包渲染。在 mdx 中可以引入 storybook 的示例，以及引用源码中的类型、注释信息作为 API 文档
- 基础组件：
  - `npm run start`启动开发环境（通过原生 webpack 搭建）
- 文档站：使用 gatsbyjs 进行开发。从而文档站是完全静态化的，所有数据在构建期间就被收集（从仓库中），在运行期间无需服务端提供数据

如果想要检查完整的编译、构建、信息提取过程能否正确通过，到对应子包下运行`npm run prepublish`。

## 代码规范

### 分支、提交规范

代码贡献流程：

1. fork 本仓库
2. 每个特性、修复都基于最新的 master 分支开始修改：`git checkout -b my-fix-branch master`
3. 要 commit 时，在根目录执行`nom run commit`，来生成规范化的 commit message
4. push 到远程之前，通过`git rebase master -i`将你分支上的多个 commit 合并成一个

### 代码风格

项目根目录配置了 eslint 来检查整个项目的代码风格。当你用 vscode 打开这个项目的时候，vscode 会推荐安装一些插件（比如 eslint），你点击确定，就能自动安装所需的插件。如果没有合理的原因，不要忽略 eslint 的警告。

> 项目已经做了相关配置：在每次保存文件的时候会自动使用 eslint+prettier 进行格式化。

### 样式书写

样式全部使用 styled-components 来编写。并且，styled-components 的组件名称必须在开头加上`S`，以示区分。比如原本的`<div className="wind-selection-cointainer">`改为`<SSelectionCointainer>`。

## PR 贡献者必须签署 CLA 协议

在提交 PR 以后会出现一个 CLA 协议让提交者签署，未签署 CLA 协议的 PR 不会被合并。
