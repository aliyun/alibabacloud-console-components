/**
 * @title 自定义样式
 * @description 图标字体本质上还是文字，可以使用 style 和 className 设置图标的大小和颜色。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <div className="icon-style-demo">
        <Icon
          type="success"
          style={{ color: '#1DC11D', marginRight: '10px' }}
        />
        This is a success message!
      </div>
      <div className="icon-style-demo">
        <Icon
          type="warning"
          style={{ color: '#FFA003', marginRight: '10px' }}
        />
        This is a warning message!
      </div>
      <div className="icon-style-demo">
        <Icon type="error" style={{ color: '#FF3333', marginRight: '10px' }} />
        This is a failure message!
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .icon-style-demo {
    height: 24px;
    line-height: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`
