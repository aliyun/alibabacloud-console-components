/**
 * @title 自定义面板页脚
 * @description 可以通过 `extraFooterRender` 自定义对面板页脚的定制。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'

const { RangePicker } = DatePicker2

function extraFooterRender() {
  return <div className="extra-footer">额外页脚扩展区</div>
}

export default function DemoComponent() {
  const content = (
    <div>
      <DatePicker2 extraFooterRender={extraFooterRender} showOk />
      <br />
      <br />
      <RangePicker extraFooterRender={extraFooterRender} />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-footer {
    padding: 12px;
    font-size: 12px;
  }

  .extra-footer {
    font-size: 12px;
  }
`
