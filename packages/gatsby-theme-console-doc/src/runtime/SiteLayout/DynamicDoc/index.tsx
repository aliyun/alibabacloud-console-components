import React, { useEffect, useState } from 'react'
import { usePageCtx } from '../context'

import prepareImportForDocModule from '@alicloud/console-components-lib-documenter/PrepareForLoadingDocModule'

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
    const docModuleId = prepareImportForDocModule(docDef)

    System.import(docModuleId)
      .then(res => res.default)
      .then(comp => {
        setDocComp(comp)
      })
  }, [])

  return <div>{DocComp ? DocComp : 'loading...'}</div>
}

export default DynamicDoc
