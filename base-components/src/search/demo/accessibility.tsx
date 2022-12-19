/**
 * @title 无障碍支持
 * @description 按下Enter键调用`onSearch`事件去处理,请参考[无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Search } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Search
        key="3"
        placeholder="Please enter the search content"
        onSearch={(v) => console.log(v)}
        searchText={<span>search</span>}
        style={{ width: '400px' }}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
