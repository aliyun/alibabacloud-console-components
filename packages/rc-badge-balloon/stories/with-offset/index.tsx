import React from 'react'
import BalloonedBadge from '@alicloud/console-components-badge-balloon'
import styled from 'styled-components';

const WithOffset: React.FC<{}> = () => {
  return (
    <SWrapper>
      <BalloonedBadge align="right" type="hot" offset={[3, 0]}>
        最热活动
      </BalloonedBadge>
      <BalloonedBadge align="top" type="hot" offset={[0, -5]}>
        最热活动
      </BalloonedBadge>
      <BalloonedBadge align="right" type="new" offset={[3, 0]}>
        最新活动
      </BalloonedBadge>
      <BalloonedBadge align="top" type="new" offset={[0, -5]}>
        最新活动
      </BalloonedBadge>
    </SWrapper>
  )
}

const SWrapper = styled.div`
	.badge-custom-balloon {
		margin: 30px;
	}
`

export default WithOffset
