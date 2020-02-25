import React from 'react'
import { Badge } from '@alicloud/console-components'
import styled from 'styled-components'

const { Ballooned: BalloonedBadge } = Badge

const Demo = () => {
  return (
    <Wrapper>
      <BalloonedBadge align="right" type="hot">
        最热活动
      </BalloonedBadge>
      <BalloonedBadge align="top" type="hot">
        最热活动
      </BalloonedBadge>
      <BalloonedBadge align="right" type="new">
        最新活动
      </BalloonedBadge>
      <BalloonedBadge align="top" type="new">
        最新活动
      </BalloonedBadge>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .next-badge {
    margin-right: 60px;
  }
`

export default Demo
