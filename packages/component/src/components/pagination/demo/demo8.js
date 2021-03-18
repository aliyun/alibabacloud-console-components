import React from 'react'
import { Pagination } from '@alicloud/console-components'

const format =
  typeof window === 'undefined' ? '' : `${window.location.href}#/{page}`

const Demo8 = () => <Pagination defaultCurrent={2} link={format} />

export default Demo8
