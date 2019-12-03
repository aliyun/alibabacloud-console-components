# @alicloud/gatsby-theme-console-doc

这是一个 gatsby 的 [theme](https://www.gatsbyjs.org/docs/themes/)，用于生成文档站点。它已经做了抽象，可以用于生成通用的文档站点，不仅限于 console-components。

> 事实上，它已经被用于[其他文档站点](https://aliyun.github.io/alibabacloud-console-chart/guides/quick-start)的生成。

## 已具备的能力

- 规范的站点布局，清爽的样式风格
- 类 github 风格的 markdown 渲染样式
- 自动生成导航栏（可配置）
- 自动生成搜索栏，所有文档都是可搜索的，开箱即用
- 可在文档中渲染 demo，并自动生成“在 codesandbox 打开”的功能
- 可在文档中渲染来自源码的 typescript interface（渲染成一个表格），作为 API 文档，并提取注释作为 API 描述。避免手动将 API 维护在 markdown 中，造成文档腐化

## 如何使用

[这个目录](https://github.com/aliyun/alibabacloud-console-components/tree/master/demo-workspaces/gatsby-theme-console-doc-template)是一个最小的使用示例项目。
