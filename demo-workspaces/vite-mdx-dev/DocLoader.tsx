import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import invariant from 'tiny-invariant'

const DocLoader: React.FC = () => {
  const docPath = useDocPath()
  const DocComp = useDocComp(docPath)
  const content = (() => {
    if (!DocComp) return null
    return <DocComp />
  })()
  return (
    <div>
      <p>document:</p>
      {content}
    </div>
  )
}

export default DocLoader

function useDocPath() {
  const { pathname, search } = useLocation()
  invariant(pathname, '/docs')
  const searchParam = new URLSearchParams(search)
  const docPath = searchParam.get('path')
  invariant(docPath)
  return docPath
}

function useDocComp(docPath: string) {
  const [DocComp, setDocComp] = useState<null | React.ComponentType>(null)
  useEffect(() => {
    ;(async () => {
      let result: React.ComponentType | null = null
      try {
        result = (await import('/doc/Doc.mdx')).default
      } catch (error) {
        console.error(`Fetch docPath:"${docPath}" fail.`)
        console.error(error)
      }
      if (result) setDocComp(() => result)
    })()
  }, [docPath])
  return DocComp
}
