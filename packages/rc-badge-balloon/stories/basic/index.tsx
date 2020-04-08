import React from 'react'
import BalloonedBadge from '@alicloud/console-components-badge-balloon'
import styled from 'styled-components';

const BasicDemo: React.FC<{}> = () => {
  return (
    <SWrapper>
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
    </SWrapper>
  )
}

const SWrapper = styled.div`
	.badge-custom-balloon {
		margin: 30px;
	}
`

export default BasicDemo
