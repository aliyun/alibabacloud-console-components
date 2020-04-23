import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { demoImportAlias } from '@alicloud/console-components-lib-documenter'
import loadDocModule from '@alicloud/console-components-lib-documenter/src/runtime/loadDocModule2/index'
import * as prodPkg1 from '@alicloud/cc-demo-component'
import * as prodPkg2 from '@alicloud/cc-demo-multi-components'

const aliasConfig = {
  // 预览包的生产包名（用户在生产环境应该使用的包名，即你在demo中用什么名称来import这个物料）
  importName: '@alicloud/console-components',
  // 预览包的包名、版本，我们会从unpkg等cdn拉取文档bundle
  actualLoadPkgName: '@alicloud/console-components',
  actualLoadPkgVersion: 'latest',
}

// const resolveParam = {
//   pkgName: '@alife/console-components-doc-data-dont-use-me',
//   version: 'latest',
//   path: 'dist/button.system.js',
// }

// const urls = [
//   loadDocModule.resolveDocUrl('aliUnpkg', resolveParam),
//   loadDocModule.resolveDocUrl('antUnpkg', resolveParam),
// ]
const urls = 'http://localhost:5000/docs/doc.js'

// urls传入数组时，从多个cdn并发加载，并提供容灾
loadDocModule(urls, {
  // lodash: _,
  '@alicloud/cc-demo-component': prodPkg1,
  '@alicloud/cc-demo-multi-components': prodPkg2,
}).then(({ default: DocComp }) => {
  ReactDOM.render(
    <DocComp changeDemoInfo={demoImportAlias(aliasConfig)} />,
    document.querySelector('.app')
  )
})
