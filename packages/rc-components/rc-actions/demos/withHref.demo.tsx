/**
* @title withHref
*/

import Actions, { LinkButton } from '@alicloud/console-components-actions'
import React from 'react'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  return (
    <Container>
      <div className="block">
        <Actions threshold={2}>
          <LinkButton
            Component="a"
            href="https://www.taobao.com"
            target="_blank"
          >
            淘宝
          </LinkButton>
          <LinkButton
            Component="a"
            href="https://www.aliyun.com"
            target="_blank"
          >
            阿里云
          </LinkButton>
          <LinkButton
            Component="a"
            target="_blank"
            href="https://www.freshhema.com/"
            disabled
          >
            禁用
          </LinkButton>
          <LinkButton
            Component="a"
            target="_blank"
            href="https://www.freshhema.com/"
          >
            盒马
          </LinkButton>
        </Actions>
      </div>
    </Container>
  )
}

export default Basic
