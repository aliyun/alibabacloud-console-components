import Actions, { LinkButton } from '@alicloud/console-components-actions'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'
import React from 'react'
import { Container } from './styles'

const Basic: React.FC<{}> = () => {
  return (
    <Container>
      <div style={{ height: '400px' }} className="block">
        <Actions>
          <LinkButton to="/instance">实例</LinkButton>
          <LinkButton to="/list">列表</LinkButton>
          <LinkButton to="/edit" disabled>
            编辑
          </LinkButton>
          <LinkButton to="/detail">详情</LinkButton>
          <LinkButton to="/detail" disabled>
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
