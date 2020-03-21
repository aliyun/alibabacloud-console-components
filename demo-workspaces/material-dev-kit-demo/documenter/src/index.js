import * as React from 'react'
import * as ReactDOM from 'react-dom'
import loadDocModule from '@alicloud/console-components-lib-documenter/src/runtime/loadDocModule'

// const docDef = {
//   // 预览包的生产包名（用户在生产环境应该使用的包名，即你在demo中用什么名称来import这个物料）
//   prodPkgName: '@alicloud/console-components-actions',
//   // 预览包的包名、版本，我们会从unpkg等cdn拉取文档bundle
//   actualLoadPkgName: '@cc-dev-kit-test/console-components-actions',
//   actualLoadPkgVersion: '1.0.9-preview.1',
// }

const docDef = {
  // 预览包的生产包名（用户在生产环境应该使用的包名，即你在demo中用什么名称来import这个物料）
  prodPkgName: '@alicloud/console-components-truncate',
  // 预览包的包名、版本，我们会从unpkg等cdn拉取文档bundle
  actualLoadPkgName: '@alicloud/console-components-truncate',
  actualLoadPkgVersion: 'latest',
}

loadDocModule(docDef).then(({ default: DocComp }) => {
  ReactDOM.render(<DocComp pkgInfo={docDef} />, document.querySelector('.app'))
})
