import React from 'react'
import { Pagination } from '@alicloud/console-components'
import MediaQuery from 'react-responsive'

const defaultPageSizeList = [10, 20, 50]

const TablePagination = props => (
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
        pageSizeList={defaultPageSizeList}
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
        hideOnlyOnePage
        {...props}
      />
    </MediaQuery>
  </MediaQuery>
)

export default TablePagination
