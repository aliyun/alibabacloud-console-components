/**
 * @title 自定义样式
 * @description 通过style设置宽度
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Input
        placeholder="width:400"
        style={{ width: 400 }}
        aria-label="style width 400"
      />
      <br />
      <br />

      <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="medium"
        value="alibaba"
        style={{ width: 400 }}
        aria-label="style width 400"
      />
      <br />
      <br />

      <Input
        placeholder="medium"
        maxLength={10}
        showLimitHint
        style={{ width: 400 }}
        aria-label="style width 400"
      />
      <br />
      <br />

      <Input
        placeholder="medium"
        hasClear
        maxLength={10}
        showLimitHint
        style={{ width: 400 }}
        className="my-input-class"
        state="success"
        aria-label="style width 400"
      />
      <br />
      <br />

      <Input
        placeholder="className"
        className="my-input-class"
        aria-label="custom my input class"
      />
      <Input htmlType="hidden" aria-label="hidden input" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  body .my-input-class {
    width: 500px;
  }
`
