/**
 * @title 大小
 * @description 通过size进行大小设置，支持large、medium
 */

import * as React from 'react'
import styled from 'styled-components'

import { Search } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Search
        size="large"
        defaultValue="large"
        searchText="Search"
        placeholder="What are you looking for..."
      />
      <br />
      <br />
      <Search
        size="medium"
        defaultValue="medium"
        searchText="Search"
        placeholder="What are you looking for..."
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
