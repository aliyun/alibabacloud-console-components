/**
 * @title 基础用法
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Search } from '@alicloudfe/components'

function onSearch(v) {
  console.log(v)
}
const App = () => [
  <p key="1">simple</p>,
  <Search
    key="2"
    shape="simple"
    hasClear
    onSearch={onSearch}
    style={{ width: '400px' }}
  />,
  <p key="3">default</p>,
  <Search key="4" onSearch={onSearch} style={{ width: '400px' }} />,
  <p key="5">custom text </p>,
  <Search
    key="6"
    searchText="search"
    onSearch={onSearch}
    style={{ width: '400px' }}
  />,
  <p key="7">custom text widthout icon</p>,
  <Search
    key="8"
    hasIcon={false}
    searchText={<span style={{ color: 'blue' }}>search</span>}
    onSearch={onSearch}
    style={{ width: '400px' }}
  />
]

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
