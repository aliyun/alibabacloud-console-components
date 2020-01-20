import React, { useEffect, useState } from 'react'
import { IDocDef } from '@alicloud/console-components-lib-documenter/src/runtime/loadDocModule'
import RcAnnouncement from '@alicloud/console-components-announcement'

const DocPreview: React.FC = () => {
  const [DocComp, setDocComp] = useState<any>(null)
  const [docDef, setDocDef] = useState<null | IDocDef>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const docDef = getDocDefFromURL()
    if (docDef) {
      setDocDef(docDef)
      window
        .loadDocModule(docDef)
        .then(res => res.default)
        .then(comp => {
          setDocComp(() => comp)
        })
        .catch(err => {
          setError(err)
        })
    }
  }, [])

  console.log({ DocComp, docDef, error })

  if (error) {
    if (error.stack) return <pre>{error.stack}</pre>
    return <p>Unknown error: {error.toString()}</p>
  }
  if (!docDef) {
    return <p>Can't find doc definition from url search params.</p>
  }
  if (docDef && !DocComp) {
    return <p>loading...</p>
  }

  const announcementDataSource = [
    {
      title: '当前的文档处于预发状态',
      content: (
        <p>
          预览数据来自预览包：
          <code>
            {docDef.actualLoadPkgName}@{docDef.actualLoadPkgVersion}
          </code>
          。
        </p>
      ),
    },
  ]

  return (
    <div>
      <RcAnnouncement type="warning" dataSource={announcementDataSource} />
      <DocComp pkgInfo={docDef} />
    </div>
  )
}

export default DocPreview

function getDocDefFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  const actualLoadPkgName = urlParams.get('actualLoadPkgName')
  const actualLoadPkgVersion = urlParams.get('actualLoadPkgVersion')
  const prodPkgName = urlParams.get('prodPkgName') || actualLoadPkgName
  if (!actualLoadPkgName || !actualLoadPkgVersion || !prodPkgName) return null
  return {
    actualLoadPkgName,
    actualLoadPkgVersion,
    prodPkgName,
  }
}
