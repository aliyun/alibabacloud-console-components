import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { BaseCompDocEntry } from '@site/constants'

const IndexPage = () => {
  useEffect(() => {
    navigate(BaseCompDocEntry)
  }, [])
  return null
}

export default IndexPage
