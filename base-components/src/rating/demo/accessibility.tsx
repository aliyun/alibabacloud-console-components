/**
 * @title 无障碍支持
 * @description 组件内置了部分支持无障碍, 但是额外需要开发者手动事情才能完整支持无障碍：给 Rating 传入一个id，就可以支持语音提示当前选择的评分。注意：如果一个页面上有多个 Rating，id 属性一定不能相同。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alicloudfe/components'

const starMap = {
  1: 'Bad',
  2: 'OK',
  3: 'Good',
  4: 'Great',
  5: 'Perfect'
}

export default function DemoComponent() {
  const content = (
    <div>
      <Rating
        id="rating-a11y-1"
        defaultValue={3}
        readAs={(val) => starMap[val]}
        onChange={(val) => console.log('change:', val)}
        onHoverChange={(val) => console.log('hover:', val)}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
