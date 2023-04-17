---
name: contributing
zhName: 贡献指南
sort: 3
---

# 贡献指南

## 代码仓库组织结构

本仓库使用 [pnpm workspaces](https://pnpm.io/workspaces) 进行管理，是 monorepo 的结构。
将本仓库克隆到本地以后，执行`npm run bootstrap`即可完成项目的初始化。后续重新安装依赖直接通过在根目录执行`pnpm i`，如果不行的话再尝试`npm run bootstrap`。

> `npm run bootstrap`耗时较长，因为需要将所有 package 都构建一遍。如果之前已经有构建过，可以使用`npm run install`来执行只安装、不构建的流程。

- 基础组件：维护在[aliyun/cloud-design](https://github.com/aliyun/cloud-design)仓库，与混合云、云效等组件库使用同一套工程体系和基础代码。
- 业务组件：在本仓库的`packages/rc-*`目录下。使用`npm run dev`来启动本地开发环境。
- 开发指南：原文放在`guides`目录下（比如本指南）。开发指南会被`site`项目打包，在文档站点中展示。
- 组件开发者工具：[breezr-docs](https://github.com/aliyun/alibabacloud-console-toolkit/tree/preset-demos/docs-sdk/docs-provider)。

## 开发期所需的依赖都安装在根项目

新增业务组件时注意：**所有开发期所需的依赖都安装在根项目中**（比如 eslint、构建工具 breezr、@types/react），从而不需要每个子项目都维护一份自己的开发依赖，做到统一管理、升级。

增加新的`devDependencies`时，优先考虑安装在根项目（在根项目执行`pnpm install -D 开发期依赖`）。除非这个开发依赖比较特殊，只有某个子项目会用到。

如果你要在子包中使用根项目下安装的 cli 工具(比如 `breezr build`)，需要先在根项目执行`npm run link-bin`，将`/node_modules/.bin`下的工具 link 到所有子包中。

在 `npm run bootstrap` 时自动帮你执行了一次这个命令。如果你在执行 npm 命令的时候遇到了"command not found"错误，手动在根项目执行`npm run link-bin`即可。

## 开发指南

所有`package.json`都已经配置好`scripts`，新增业务组件时请仿照已有`package.json`的格式。

**提交前务必走一遍完整的编译、构建、信息提取流程，检查是否能顺利通过**。检查方式：到对应子包下运行`npm run prepublishOnly`。

### 业务组件

- 使用 typescript 语言编写代码。通过类型定义约束自己以及下游开发者；通过类型定义中的注释，可以将说明信息提供给下游开发者（用户在 vscode hover 到对应字段的时候会看到对应注释）。
- 使用 [breezr-docs](https://github.com/aliyun/alibabacloud-console-toolkit/tree/preset-demos/docs-sdk/docs-provider) 作为开发环境。使用`npm run dev`启动本地开发环境。更多用法参考[示例说明](http://gitlab.alibaba-inc.com/sirui.csr/breezr-doc-demo)。

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
