import { Pagination as NextPagination } from '@alifd/next'
import type { PaginationProps } from '@alifd/next/types/pagination'
import { withThemeClass } from '../utils/withThemeClass'
import React from 'react'
import { useCssVar } from '../utils/useCssVar'

const Pagination: typeof NextPagination = ((props: PaginationProps) => {
  const theme = useCssVar('--alicloudfe-components-theme').trim()
  // 混合云云效主题默认不显示下一页
  const shape = (() => {
    if (theme.startsWith('hybridcloud') || theme.startsWith('yunxiao')) {
      return 'arrow-only'
    }
    return 'normal'
  })()

  return <NextPagination shape={shape} {...props} />
}) as any

export default withThemeClass(Pagination)
