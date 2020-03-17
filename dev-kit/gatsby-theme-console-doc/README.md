# @alicloud/gatsby-theme-console-doc

这是一个 gatsby 的 [theme](https://www.gatsbyjs.org/docs/themes/)，用于生成文档站点。它已经做了抽象，可以用于生成通用的文档站点，不仅限于 console-components。

> 事实上，它已经被用于[其他文档站点](https://aliyun.github.io/alibabacloud-console-chart/guides/quick-start)的生成。

## 如何使用

[这个目录](https://github.com/aliyun/alibabacloud-console-components/tree/master/demo-workspaces/gatsby-theme-console-doc-template)是一个最小的使用示例项目。

## 已具备的能力

- 继承自 gatsby 的高性能：SSR、prefetching
- 规范的站点布局，清爽的样式风格
- 类 github 风格的 markdown 渲染样式
- 自动生成搜索功能，所有文档都是可搜索的，开箱即用
- 文档标签。并且可以通过标签来搜索文档、向用户推荐其他文档。标签还用于编排左侧导航栏
- 动态加载文档。动态文档更新后，文档站点无需重新构建发布。
- 可编排的左侧导航栏

以及文档粒度的优化扩展：

- 在 markdown 中嵌入本地的图片。图片会被自动优化
- 可在文档中嵌入 demo，并自动生成“在 codesandbox 打开”的功能
- 可在文档中渲染来自源码的 typescript interface（渲染成一个表格），作为 API 文档，并提取注释作为 API 描述。避免手动将 API 维护在 markdown 中，造成文档腐化
- 自动生成标题跳转锚点、文档目录结构

有关文档粒度的优化扩展的详细说明，请查看 👉[文档特性](./doc-features)。本文档只阐述跨文档的、站点粒度的重要特性。

## 文档搜索

## 文档标签

## 左侧导航栏编排
