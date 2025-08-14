import React from 'react'
import Badge from '@alicloud/console-components-badge'
import styled from 'styled-components'

const BasicDemo: React.FC<{}> = () => {
  return (
    <SWrapper>
      <div className="container">
        <Badge position="right" content="HOT">
          最热活动
        </Badge>
      </div>
      <div className="container">
        <Badge position="top" content="HOT">
          最热活动
        </Badge>
      </div>
      <div className="container">
        <Badge position="right" content="NEW">
          最新活动
        </Badge>
      </div>
      <div className="container">
        <Badge position="top" content="NEW">
          最新活动
        </Badge>
      </div>
    </SWrapper>
  )
}

const SWrapper = styled.div`
  margin-top: 30px;
  .container {
    margin-top: 30px;
  }
`

export default BasicDemo
