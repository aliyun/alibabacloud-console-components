---
name: lib-documenter
zhName: 文档运行时
sort: 100
tags:
  dev-kit: true
  documentation: true
---

# @alicloud/console-components-lib-documenter

用来加载文档 bundle，得到一个 React 组件。文档 bundle 由`@alicloud/console-components-lib-publisher`工具构建生成。

> 大部分开发者不需要直接使用这个包，可以无需阅读下面的文档。除非你是文档站点开发者，希望在你自己开发的文档站中加载`lib-publisher`构建生成的文档。因为我们提供的文档站点框架`@alicloud/gatsby-theme-console-doc`已经在内部集成了这个包，实现文档的动态加载（详见其文档）。建议大部分用户直接使用这个站点框架来构建文档。

最小使用示例：

```tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import loadDocModule from '@alicloud/console-components-lib-documenter/loadDocModule'

const docDef = {
  // 预览包的生产包名（用户在生产环境应该使用的包名，即你在demo中用什么名称来import这个物料）
  prodPkgName: '@alicloud/console-components-actions',
  // 预览包的包名、版本，我们会从unpkg等cdn拉取文档bundle
  actualLoadPkgName: '@cc-dev-kit-test/console-components-actions',
  actualLoadPkgVersion: '1.0.9-preview.0',
}

loadDocModule(docDef).then(({ default: DocComp }) => {
  ReactDOM.render(<DocComp pkgInfo={docDef} />, document.querySelector('.app'))
})
```

这个例子展示了，动态加载文档是多么的简单：你只需要给`loadDocModule`方法提供 npm 包的信息，它就会返回给你一个 React 组件，其渲染结果就是文档。

## 为什么要动态加载文档

对于一个包含多个 npm 包、多份文档的组件库来说，如果每次文档更新都要重新构建发布一次文档站点，这会是一件非常耗时的事情（这种巨石文档站点的构建往往还比较慢）。
如果我们将文档的渲染结果（js bundle）放在 npm 包中一起发布(具体来说，是 npm 包中的`dist/_doc.system.js`)，然后文档站点只需要从 cdn（比如 unpkg）加载最新的文档 bundle，就能保证站点的文档永远是最新的。（未来甚至可以支持查看旧版本的文档的功能）

对于一个共建式开发的组件库来说，文档的独立发布尤其重要。否则，每一位共建者修改文档以后都需要找维护者重新构建发布一次文档站点。

此外，预览包的渲染（[例子](https://csr632.gitee.io/alibabacloud-console-components/doc-preview?prodPkgName=%40alicloud%2Fconsole-components-actions&actualLoadPkgName=%40cc-dev-kit-test%2Fconsole-components-actions&actualLoadPkgVersion=1.0.9-preview.2)）也必须是动态加载的，我们不可能在每次发布预览包以后都重新构建一次文档站点。
