import React from 'react'
import { Button } from '@alicloud/console-components'
import Styled from 'styled-components'
import './demo2.less'

const Demo2 = () => (
  <Wrapper>
    <Button size="small">小型按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="large">大型按钮</Button>
  </Wrapper>
)

const Wrapper = Styled.div`
  .next-btn {
    margin-right: 8px;
  }
`

export default Demo2
