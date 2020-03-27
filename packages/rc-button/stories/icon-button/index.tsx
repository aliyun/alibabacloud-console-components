import React from 'react'
import { IconButton } from '@alicloud/console-components-button'
import styled from 'styled-components'

const Basic: React.FC<{}> = () => (
  <Wrapper>
    <IconButton className="button-item" icon="refresh" />
    <IconButton className="button-item" icon="cog" />
    <IconButton className="button-item" icon="download" />
    <IconButton className="button-item" icon="menu" />
  </Wrapper>
)

const Wrapper = styled.div`
  .button-item {
    margin-right: 8px;
  }
`
export default Basic
