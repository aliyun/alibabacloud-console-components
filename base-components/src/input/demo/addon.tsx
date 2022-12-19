/**
 * @title 前后扩展
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Input
        showLimitHint
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="large"
        defaultValue="alibaba"
        maxLength={5}
        aria-label="input with config of addonTextBefore and addonTextAfter"
      />
      <br />
      <br />

      <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="medium"
        value="alibaba"
        aria-label="input with config of addonTextBefore and addonTextAfter"
      />
      <br />
      <br />

      <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="small"
        value="alibaba"
        aria-label="input with config of addonTextBefore and addonTextAfter"
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
