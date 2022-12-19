/**
* @title withLink
*/

import Actions, { LinkButton } from '@alicloud/console-components-actions'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'
import React from 'react'
import { Link } from 'dva/router'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  return (
    <Container>
      <div style={{ height: '400px' }} className="block">
        <Actions>
          <LinkButton Component={Link} to="/instance">
            实例
          </LinkButton>
          <LinkButton Component={Link} to="/list">
            列表
          </LinkButton>
          <LinkButton Component={Link} to="/edit" disabled>
            编辑
          </LinkButton>
          <LinkButton Component={Link} to="/detail">
            详情
          </LinkButton>
          <LinkButton Component={Link} to="/detail" disabled>
            禁用
          </LinkButton>
        </Actions>
      </div>
    </Container>
  )
}

export default () => (
  <FakeBrowser>
    <Basic />
  </FakeBrowser>
)
