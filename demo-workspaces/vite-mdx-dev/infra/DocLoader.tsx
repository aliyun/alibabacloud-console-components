import React, { useState, useEffect } from 'react'
import invariant from 'tiny-invariant'
import { useLocation } from 'react-router-dom'
import { wrapMdxModule } from '@alicloud/console-components-doc-runtime'

const DocLoader: React.FC = () => {
  const docPath = useDocPath()
  invariant(docPath)
  const DocComp = useDocComp(docPath)
  const content = (() => {
    if (!DocComp) return null
    return <DocComp />
  })()
  return <div>{content}</div>
}

export default DocLoader

function useDocComp(docPath: string) {
  const [DocComp, setDocComp] = useState<null | React.ComponentType>(null)
  useEffect(() => {
    ;(async () => {
      let result: React.ComponentType | null = null
      try {
        let docModule = await import(`/proxy-module?path=${docPath}`)
        if (docModule.default.isMDXComponent) {
          docModule = wrapMdxModule(docModule)
        }
        result = docModule.default
      } catch (error) {
        console.error(`Fetch docPath:"${docPath}" fail.`)
        console.error(error)
      }
      if (result) setDocComp(() => result)
    })()
  }, [docPath])
  return DocComp
}

export function useDocPath() {
  const { pathname } = useLocation()
  invariant(pathname.startsWith('/workspace/'))
  const docPath = pathname.replace(/^\/workspace\//, '')
  return docPath
}
