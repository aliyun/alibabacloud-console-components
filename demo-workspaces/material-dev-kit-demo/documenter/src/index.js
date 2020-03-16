import * as React from 'react'
import * as ReactDOM from 'react-dom'

import loadDocModule from '@alicloud/console-components-lib-documenter/loadDocModule'
;(async function main() {
  const docDef = {
    prodPkgName: '@alicloud/console-components-actions',
    actualLoadPkgName: '@cc-dev-kit-test/console-components-actions',
    actualLoadPkgVersion: '1.0.9-preview.0',
  }

  const DocComp = (await loadDocModule(docDef)).default

  ReactDOM.render(
    <div
      style={{
        margin: '240px 240px',
        border: '2px solid gray',
        width: '960px',
        height: '400px',
        // 滚动容器需要作为定位基准
        overflow: 'auto',
        position: 'relative',
      }}
      className="ctn"
    >
      <DocComp pkgInfo={docDef} scrollContainer=".ctn" />
    </div>,
    document.querySelector('.app')
  )
})()
