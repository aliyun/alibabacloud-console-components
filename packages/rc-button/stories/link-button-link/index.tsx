import React from 'react'
import { LinkButton } from '@alicloud/console-components-button'
import styled from 'styled-components'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

import { Link } from 'dva/router'

const Demo = () => (
  <Container>
    <div className="item">
      <LinkButton disabled Component={Link} to="/detail">
        详情
      </LinkButton>
    </div>
    <div className="item">
      <LinkButton Component={Link} to="/edit">
        编辑
      </LinkButton>
    </div>
    <div className="item">
      <LinkButton Component={Link} to="/instance">
        实例
      </LinkButton>
    </div>
    <div className="item">
      <LinkButton Component={Link} to="/list">
        列表
      </LinkButton>
    </div>
  </Container>
)

export default () => (
  <FakeBrowser>
    <Demo />
  </FakeBrowser>
)

const Container = styled.div`
  .item {
    margin-top: 16px;
  }
`
