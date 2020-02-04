import React, { useEffect, useState } from 'react'
import { usePageCtx } from '../context'

const DynamicDoc: React.FC<{}> = () => {
  const pageCtx = usePageCtx()
  if (pageCtx.pageMeta.type !== 'dynamic-doc') return null

  const docDef = {
    prodPkgName: pageCtx.pageMeta.prodPkgName,
    actualLoadPkgName: pageCtx.pageMeta.actualLoadPkgName || pageCtx.pageMeta.prodPkgName,
    actualLoadPkgVersion: pageCtx.pageMeta.actualLoadPkgVersion || 'latest',
  }

  const [DocComp, setDocComp] = useState<any>(null)

  useEffect(() => {
    window
      .loadDocModule(docDef)
      .then(res => res.default)
      .then(comp => {
        setDocComp(() => comp)
      })
  }, [])

  return <div>{DocComp ? <DocComp pkgInfo={docDef} /> : 'loading...'}</div>
}

export default DynamicDoc
