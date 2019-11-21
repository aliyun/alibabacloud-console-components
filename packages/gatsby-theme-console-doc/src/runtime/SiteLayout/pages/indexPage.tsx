import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { usePageCtx } from '../context'

const IndexPage = () => {
  const pageCtx = usePageCtx()
  useEffect(() => {
    navigate(pageCtx.siteMeta.primaryPath)
  }, [pageCtx.siteMeta.primaryPath])
  return null
}

export default IndexPage
