import * as React from 'react'
import * as ReactDOM from 'react-dom'
import loadDocModule from '@alicloud/console-components-lib-documenter/loadDocModule'
;(async function main() {
  const docDef = {
    // 预览包的生产包名（用户在生产环境应该使用的包名，即你在demo中用什么名称来import这个物料）
    prodPkgName: '@alicloud/console-components-actions',
    // 预览包的包名、版本，我们会从unpkg等cdn拉取文档bundle
    actualLoadPkgName: '@cc-dev-kit-test/console-components-actions',
    actualLoadPkgVersion: '1.0.9-preview.0',
  }
  const DocComp = (await loadDocModule(docDef)).default
  ReactDOM.render(
    <div
      // 滚动容器作为定位基准，我们会根据容器来计算滚动位置、高亮目录
      style={{
        height: '100vh',
        overflow: 'auto',
        position: 'relative',
      }}
      className="scroll-ctn"
    >
      <DocComp pkgInfo={docDef} scrollContainer=".scroll-ctn" />
    </div>,
    document.querySelector('.app')
  )
})()
