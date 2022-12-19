/**
 * @title 禁用状态
 * @description 为 `Input` 设置 `disabled` 状态；
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Input
        disabled
        aria-label="disabled"
        placeholder="disabled"
        size="small"
      />
      <br />
      <br />

      <Input
        disabled
        aria-label="disabled"
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="medium"
        value="alibaba"
      />
      <br />
      <br />

      <Input
        disabled
        aria-label="disabled"
        placeholder="medium"
        maxLength={10}
        showLimitHint
      />
      <br />
      <br />

      <Input.TextArea
        disabled
        aria-label="disabled"
        placeholder="medium"
        maxLength={10}
        showLimitHint
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
