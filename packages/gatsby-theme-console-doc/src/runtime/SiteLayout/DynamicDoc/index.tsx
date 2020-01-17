import React, { useEffect, useState } from 'react'
import { usePageCtx } from '../context'
import { ISiteMeta, IDynamicDocMeta } from '..'

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
    initAllDynamicDoc(pageCtx.siteMeta)
    const docModuleId = getDocModuleId(docDef)

    System.import(docModuleId)
      .then(res => res.default)
      .then(comp => {
        setDocComp(() => comp)
      })
  }, [])

  return <div>{DocComp ? <DocComp pkgInfo={docDef} /> : 'loading...'}</div>
}

export default DynamicDoc

function initAllDynamicDoc(siteMeta: ISiteMeta) {
  if ((System as any).__initAllDynamicDoc) return
  ;(System as any).__initAllDynamicDoc = true
  const dynamicDocs: IDynamicDocMeta[] = []
  siteMeta.categories.forEach(({ docs }) => {
    docs.forEach(doc => {
      if (doc.type === 'dynamic-doc') {
        dynamicDocs.push(doc)
      }
    })
  })
  dynamicDocs.forEach(doc => {
    const docDef = {
      prodPkgName: doc.packageName,
      actualLoadPkgName: doc.packageName,
      actualLoadPkgVersion: doc.packageVersion || 'latest',
    }
    // 在gatsby-browser.js中将这个方法添加到了window对象
    window.prepareImportForDocModule(docDef)
  })
}

function getDocModuleId(docDef) {
  return `doc@${docDef.actualLoadPkgName}@${docDef.actualLoadPkgVersion}`
}
