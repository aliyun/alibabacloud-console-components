import React, { useEffect, useState } from 'react'
import { usePageCtx } from '../context'

const DynamicDoc: React.FC<{}> = () => {
  const pageCtx = usePageCtx()
  if (pageCtx.pageMeta.type !== 'dynamic-doc') return null

  const docDef = {
    prodPkgName: pageCtx.pageMeta.packageName,
    actualLoadPkgName: pageCtx.pageMeta.packageName,
    actualLoadPkgVersion: pageCtx.pageMeta.packageVersion || 'latest',
  }

  const [DocComp, setDocComp] = useState<any>(null)

  useEffect(() => {
    // 在gatsby-browser.js中将这个方法添加到了window对象
    const docModuleId = window.prepareImportForDocModule(docDef)

    System.import(docModuleId)
      .then(res => res.default)
      .then(comp => {
        setDocComp(() => comp)
      })
  }, [])

  return <div>{DocComp ? <DocComp pkgInfo={docDef} /> : 'loading...'}</div>
}

export default DynamicDoc
