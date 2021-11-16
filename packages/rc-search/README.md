# @alicloud/console-components-search

这是一个业务组件示例。它使用 [breezr-doc](https://github.com/aliyun/alibabacloud-console-toolkit/tree/preset-demos/docs-sdk/docs-provider) 来开发文档和 demo。

基于此仓库开始组件开发：克隆本仓库，然后搜索代码`@alicloud/console-components-search`，替换成你自己的组件包名。

业务组件维护工作流中，重要的 npm script：

- `npm run dev` 启动本地开发服务器，开发本地的文档和 demo
- `npm run doc:build` 构建文档和 demo
- `npm run doc:serve` 将上一步构件好的文档资源，使用本地 http 服务器部署。我们会生成一个【物料预览平台】的链接，让物料预览平台加载您本地部署的文档资源。您还可以将文档资源部署到自己的 cdn，然后将【物料预览平台的链接】中的 servePath 修改为自己的 cdn 地址，得到你自己的文档预览/分享链接
- `OSS_K=<<OSS账号>> OSS_S=<<OSS密码>> npm run upload:pre` 将构建好的文档和 demo 上传到 OSS（预发），请联系 @萧雨 申请 OSS 账号和密码。资源上传成功以后会返回一个【物料预览平台】的链接，比如 [链接示例](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-fe-test-rc-search-doc&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2Fconsole-fe-test-rc-search-doc%2F-pre%2F&entryKey=README)，你可以将这个链接分享给物料的评阅者，从而评阅者能立刻看到你开发的文档和 demo
- `OSS_K=<<OSS账号>> OSS_S=<<OSS密码>> npm run upload` 开发完成以后，将构建好的文档和 demo 上传到 OSS（正式）。上传成功以后，你可以在任意站点，通过文档加载器`@alicloud/console-toolkit-docs-consumer`来加载文档和 demo。
  - OSS 上传只是部署方式**之一**。您可以将构建好的文档资源部署到任意 cdn 或 http 服务器。参考上面对`npm run doc:serve`的说明。
- `npm run prepublishOnly` 执行完整的【组件构建流程】，包括 babel 转译成 js、生成 ts 声明文件、webpack 构建生成 umd bundle、文档资源构建。
  - 除了文档构建以外，其他的【组件构建流程】可以替换成你自己喜欢的工具，比如使用 tsc 来编译 Typescript、使用原生 webpack 来打包。

## 将本地开发的 demo 嵌入到文档

breezr-docs 还是 demo 的开发、构建工具。您可以在文档中嵌入 demo。

您可以在本地开发的时候，复制对应 demo 页面的 url，在 markdown 文档中插入`[$XView](demo url)`，它就会自动被渲染成对应的 demo。

[$XView](http://localhost:3333/?entryKey=demo2&consoleOSId=console-fe-test-rc-search-doc)

> **url 的 origin 部分不会影响正确性**。加载 demo 时，只会根据 url query 的`entryKey`和`consoleOSId`来决定 demo 加载的方式。

在以下示例中，demo 链接是从【物料预览平台】拷贝的，这样做的好处是，用户[通过 github/gitlab 查看这个 markdown 文件](http://gitlab.alibaba-inc.com/sirui.csr/breezr-doc-demo)的时候，用户可以点击以下链接，跳转到【物料预览平台】的对应 demo。除了有这个好处以外，这个例子和上一个例子完全等价（因为`entryKey`和`consoleOSId`是相同的）。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-fe-test-rc-search-doc&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2Fconsole-fe-test-rc-search-doc%2F-pre%2F&entryKey=demo2)

## 从 Typescript 源码提取接口信息并渲染到文档

breezr-docs 支持从 Typescript 源码中提取接口信息，并输出到文档。
因此你可以使用 Typescript 接口来定义 Props（或者其他**契约**），从而能便捷地将**契约信息**通过文档透出。
让源代码和文档共用同一份 Typescript 接口定义，可以保证文档的时效性，降低文档维护成本。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-fe-test-rc-search-doc&entryKey=types%2FButtonProps)

## 嵌入 markdown 片段

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-fe-test-rc-search-doc&entryKey=docs%2Ftest)

## 更多示例

更多示例用法可以参考 [我们开发时的用例](https://github.com/aliyun/alibabacloud-console-toolkit/blob/preset-demos/docs-sdk/examples/docs-provider/breezr.config.js)。
