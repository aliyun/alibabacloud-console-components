---
name: concepts
zhName: 基本概念
sort: 1
---

# 基本概念

## Console Components

Console Components 是针对阿里云控制台场景的 React 组件解决方案。它是阿里云控制台视觉规范的实现者，帮助阿里内部以及生态伙伴的开发者，更快地编写的阿里云控制台应用，而无需为视觉规范而困扰。Console Components 在保障阿里云控制台的体验一致性的同时，降低用户开发成本。

Console Components 的项目代号为`Wind`。

开源背景：Wind 在阿里云控制台团队已经有 2 年的历史，过去一直服务于阿里云内部的控制台开发者。现在将 Wind 开源出来，是为了更好地帮助生态伙伴，让他们也能轻松地开发阿里云管控应用，进而服务于企业客户。

## 基础组件

基础组件即 npm package `@alicloud/console-components` 中的组件。

基础组件基于[Fusion design](https://fusion.design/)做[样式定制](https://fusion.design/component/doc/3077)得到。Fusion design 是阿里集团出品的一套 UI 解决方案，它的核心就是一套高度可定制化的 React 组件库。基础组件不会带有控制台的业务逻辑，因此可以作为通用组件库来使用。

Console Components 选择基于 Fusion 做扩展的原因：

1. 避免在底层组件层面重复造轮子，将精力聚焦于控制台业务场景。
2. 集团内部大部分前端同学都有 Fusion 的使用经历，基于 Fusion 来建设 Console Components 有助于减少开发者学习、沟通成本。

基础组件维护在[aliyun/cloud-design](https://github.com/aliyun/cloud-design)仓库，与混合云、云效等组件库使用同一套工程体系和基础代码。

## 业务组件

业务组件即 npm packages `@alicloud/console-components-*` 中的组件。

基础组件都是相对比较基础、普适的，而控制台业务又有它独特需求。为了满足**在控制台开发过程中常见的组件需求**，我们沉淀出一套业务组件。大部分业务组件都是基于基础组件做拼装、封装得到。

**每个业务组件都会作为一个独立的 npm package 发布**，而不像基础组件一样，放在一个大的 package 里面一起发布。这样做的目的是**让每个业务组件都有自己的版本号**，好处如下：

1. 如果放在一个大 package 里面管理，那么版本号的语义不明确，当一个业务组件出现 minor 级别甚至 major 级别的 change 时，整个 package 就要出现较大的版本号跃迁，**即使其他的业务组件根本就没有变化**。有独立版本号以后，开发者可以清晰地知道，每次版本号升级对应于哪个组件。
2. 如果放在一个大 package 里面管理，一旦出现 major 版本号升级，那么用户需要仔细检查**每个业务组件**的 breaking change。有独立版本号以后，用户可以以组件为粒度，进行渐进式升级，升级成本较小。

业务组件维护在[本仓库](https://github.com/aliyun/alibabacloud-console-components/tree/master/packages)。

## styled-components

> 如果你目前不需要**定制 Console Components 业务组件的样式**，可以不必了解 styled-components。

Console Components 内部使用[styled-components](https://www.styled-components.com/docs/basics)来编写业务组件的样式。styled-components 是 React 社区最流行的 CSS 模块化解决方案之一。

Console Components 选择使用 styled-components 的原因：

1. import 即可用的 scss 语法，无需用户配置 webpack。
2. 自动为每个 styled-component 生成全局唯一类名，避免样式冲突。再也不需要为命名类名而纠结。
3. 拥有 JavaScript 的动态性，styled components 可以根据 React context、props 来决定自己的样式。
4. 便于 Console Components 的用户对样式做定制。

## Breezr

breezr 是阿里云控制台团队针对自己的开发需求而设计的 React 应用脚手架。它将 webpack、babel、jest 等工具的配置收敛到了 plugin、preset 中，免去了用户配置工具链的烦恼。
Console Components 本身使用 breezr 作为构建工具，也建议阿里云控制台开发者使用 breezr。

> [breezr 也已经开源](https://github.com/aliyun/alibabacloud-console-toolkit)，对外的名称为`alibabacloud-console-toolkit`。breezr 的开源背景与 wind 的相似。
