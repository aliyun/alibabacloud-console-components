import React, { useEffect, useState, useRef, useMemo } from 'react'
import { IDocDef } from '@alicloud/console-components-lib-documenter/src/runtime/loadDocModule'
import RcAnnouncement from '@alicloud/console-components-announcement'
import styled from 'styled-components'

const ScAnnouncement = styled(RcAnnouncement)`
  .next-slick {
    user-select: initial;
  }
`

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

  const pubTime = usePkgPublishTime(
    docDef?.actualLoadPkgName,
    docDef?.actualLoadPkgVersion
  )

  if (error) {
    if (error.stack) return <pre>{error.stack}</pre>
    return <p>Unknown error: {error.toString()}</p>
  }
  if (typeof window == 'undefined') {
    return <p>loading...</p>
  }
  if (!docDef) {
    return <p>Can't find doc definition from url search params.</p>
  }
  if (docDef && !DocComp) {
    return <p>loading...</p>
  }

  const announcementDataSource = [
    {
      title: '当前的文档处于预览状态',
      content: (
        <div>
          <p>
            为了方便物料开发者的交流、评审和分享，console-components工具支持任何人发布物料预览包，并且本站点能加载和渲染预览包。你可以将当前的页面URL分享给评阅者，对方用浏览器就能查看、试用你的本地开发成果！
          </p>
          <p>
            当前页面的预览数据来自预览包：
            <a
              href={`https://unpkg.com/browse/${docDef.actualLoadPkgName}@${docDef.actualLoadPkgVersion}/`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {docDef.actualLoadPkgName}@{docDef.actualLoadPkgVersion}
            </a>
            {pubTime && <>，发布时间为：{pubTime}</>}。
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      <ScAnnouncement type="warning" dataSource={announcementDataSource} />
      <DocComp
        pkgInfo={docDef}
        autoPadding
      />
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

function usePkgPublishTime(pkgName?: string, pkgVer?: string) {
  const pkgJson = useFetchPkgJson(pkgName, pkgVer)
  const publishTime = pkgJson?.ccMeta?.publishTime
  const localeStr = useMemo(() => {
    if (!publishTime) {
      return null
    }
    return new Date(publishTime).toLocaleString()
  }, [publishTime])
  return localeStr
}

function useFetchPkgJson(pkgName?: string, pkgVer?: string) {
  const [data, steData] = useState<any>(null)
  const lock = useRef<string>('')
  useEffect(() => {
    if (!pkgName || !pkgVer) return
    steData(null)
    const url = `https://unpkg.com/${pkgName}@${pkgVer}/package.json`
    lock.current = url
    fetch(url)
      .then(x => x.json())
      .then(pkgJson => {
        // 避免使用过时的请求
        if (url !== lock.current) return
        steData(pkgJson)
      })
  }, [pkgName, pkgVer])

  return data
}
