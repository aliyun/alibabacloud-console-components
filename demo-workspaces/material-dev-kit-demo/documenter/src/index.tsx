import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  demoImportAlias,
  loadDocModule,
} from '@alicloud/console-components-lib-documenter'
import _ from 'lodash'

const aliasConfig = {
  // 预览包的生产包名（用户在生产环境应该使用的包名，即你在demo中用什么名称来import这个物料）
  importName: '@alicloud/console-components',
  // 预览包的包名、版本，我们会从unpkg等cdn拉取文档bundle
  actualLoadPkgName: '@alicloud/console-components',
  actualLoadPkgVersion: 'latest',
}

const resolveParam = {
  pkgName: '@alife/console-components-doc-data-dont-use-me',
  version: 'latest',
  path: 'dist/button.system.js',
}

const urls = [
  loadDocModule.resolveDocDef('aliUnpkg', resolveParam),
  loadDocModule.resolveDocDef('antUnpkg', resolveParam),
]

// urls传入数组时，从多个cdn并发加载，并提供容灾
loadDocModule(urls, {
  lodash: _,
}).then(({ default: DocComp }) => {
  ReactDOM.render(
    <DocComp changeDemoInfo={demoImportAlias(aliasConfig)} />,
    document.querySelector('.app')
  )
})
