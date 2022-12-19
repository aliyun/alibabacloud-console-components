/**
 * @title 每页显示
 * @description 可以通过设置 `pageSize` 属性来指定每页显示的数量。<br>
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    pageSize: 20
  }

  handleChange = (pageSize) => {
    this.setState({ pageSize })
  }

  render() {
    return (
      <div>
        <h3>Set page size</h3>
        <Pagination pageSize={20} />
        <h3>Hide page size selector</h3>
        <Pagination pageSizeSelector={false} />
        <h3>Set page size selector to 'dropdown'，and show it in the end</h3>
        <Pagination pageSizeSelector="dropdown" pageSizePosition="end" />
        <h3>Use pageSizeList to specify the number of records per page.</h3>
        <Pagination
          pageSize={this.state.pageSize}
          total={100}
          pageSizeSelector="filter"
          pageSizeList={[5, 10, 20]}
          onPageSizeChange={this.handleChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
