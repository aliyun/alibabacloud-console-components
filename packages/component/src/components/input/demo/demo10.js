import React from 'react'
import { Input } from '@alicloud/console-components'
import styled from 'styled-components'

const Demo10 = () => {
  return (
    <Wrapper>
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
        hasLimitHint
        style={{ width: 400 }}
        aria-label="style width 400"
      />
      <br />
      <br />

      <Input
        placeholder="medium"
        hasClear
        maxLength={10}
        hasLimitHint
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
    </Wrapper>
  )
}

export default Demo10

export const demoMeta = {
  zhName: '自定义样式',
  zhDesc: '通过style设置宽度',
}

const Wrapper = styled.div`
  .my-input-class {
    width: 500px;
  }
`
