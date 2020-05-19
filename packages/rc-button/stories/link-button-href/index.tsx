import React from 'react'
import { LinkButton } from '@alicloud/console-components-button'
import styled from 'styled-components'

const Demo = () => (
  <Container>
    <div className="item">
      <LinkButton Component="a" href="https://www.taobao.com" target="_blank">
        淘宝
      </LinkButton>
    </div>
    <div className="item">
      <LinkButton Component="a" href="https://www.aliyun.com" target="_blank">
        阿里云
      </LinkButton>
    </div>
    <div className="item">
      <LinkButton
        Component="a"
        target="_blank"
        href="https://www.freshhema.com/"
        disabled
      >
        禁用
      </LinkButton>
    </div>
    <div className="item">
      <LinkButton
        Component="a"
        target="_blank"
        href="https://www.freshhema.com/"
      >
        盒马
      </LinkButton>
    </div>
  </Container>
)

export default Demo

const Container = styled.div`
  .item {
    margin-top: 16px;
  }
`
