import * as React from 'react'
import * as ReactDOM from 'react-dom'

import prepareImportForDocModule from '@alicloud/console-components-lib-documenter/PrepareForLoadingDocModule'

;(async function main() {
  // const docDef = {
  //   prodPkgName: '@alicloud/cc-demo-component',
  //   actualLoadPkgName: '@cc-dev-kit-test/cc-demo-component',
  //   actualLoadPkgVersion: '1.0.1-preview.17',
  // }

  const docDef = {
    prodPkgName: '@alicloud/console-components-page',
    actualLoadPkgName: '@cc-dev-kit-test/console-components-page',
    actualLoadPkgVersion: '1.0.3-preview.12',
  }

  const docModuleId = prepareImportForDocModule(docDef)

  const DocComp = (await System.import(docModuleId)).default

  ReactDOM.render(
    <div style={{ padding: '10px 20px' }}>
      <DocComp pkgInfo={docDef} />
    </div>,
    document.querySelector('.app')
  )
})()
