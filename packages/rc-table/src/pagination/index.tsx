import React, { useState, useRef, useLayoutEffect } from 'react'
import { Pagination } from '@alicloud/console-components'
import { PaginationProps } from '@alicloud/console-components/types/pagination'
import MediaQuery from 'react-responsive'

const defaultPageSizeList = [10, 20, 50]

const TablePagination: React.FC<PaginationProps> = props => {
  const [pageSizeHasChanged, setPageSizeHasChanged] = useState(false)
  const prevPageSize = useRef<number>()

  const { pageSize } = props
  useLayoutEffect(() => {
    if (prevPageSize.current && prevPageSize.current !== pageSize) {
      setPageSizeHasChanged(true)
    }
    prevPageSize.current = pageSize
  }, [pageSize])

  return (
    <MediaQuery minDeviceWidth={320}>
      <MediaQuery maxWidth={496}>
        <Pagination
          size="medium"
          hideOnlyOnePage
          type="mini"
          pageSizeSelector={false}
          showJump={false}
          {...props}
        />
      </MediaQuery>
      <MediaQuery minWidth={497} maxWidth={790}>
        <Pagination
          size="medium"
          hideOnlyOnePage
          type="simple"
          pageSizeSelector={false}
          showJump={false}
          {...props}
        />
      </MediaQuery>
      <MediaQuery minWidth={791} maxWidth={1128}>
        <Pagination
          size="medium"
          hideOnlyOnePage
          pageSizeSelector={false}
          showJump={false}
          {...props}
        />
      </MediaQuery>
      <MediaQuery minWidth={1129}>
        <Pagination
          size="medium"
          pageSizeSelector="dropdown"
          pageSizePosition="start"
          pageSizeList={defaultPageSizeList}
          showJump={false}
          // 如果数据不足一页时不显示翻页器，会导致当数据不足50条时，用户从只显示每页展示10条切换到显示50时，翻页器消失，无法切换回每页展示10。
          // 因此，如果用户切换过pageSize，我们就不再隐藏翻页器
          hideOnlyOnePage={!pageSizeHasChanged}
          {...props}
          onPageSizeChange={newPageSize => {
            setPageSizeHasChanged(true)
            if (typeof props.onPageSizeChange === 'function')
              props.onPageSizeChange(newPageSize)
          }}
        />
      </MediaQuery>
    </MediaQuery>
  )
}

export default TablePagination
