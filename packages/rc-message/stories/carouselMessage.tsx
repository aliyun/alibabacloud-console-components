import React from 'react'
import styled from 'styled-components'
import RcMessage from '@alicloud/console-components-message'

const dataSource = [
  {
    title: '这是一条提示信息1',
  },
  {
    title: '这是一条提示信息2',
  },
  {
    title: '这是一条提示信息3',
  },
]

const CarouselDemo: React.FC<{}> = () => (
  <Wrapper>
    <h2>可轮播的信息提示</h2>
    <RcMessage type="success" dataSource={dataSource} />
    <RcMessage type="warning" dataSource={dataSource} />
    <RcMessage type="error" dataSource={dataSource} />
    <RcMessage type="info" dataSource={dataSource} />
    <RcMessage type="notice" dataSource={dataSource} />
  </Wrapper>
)

export default CarouselDemo

const Wrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  > h2 {
    margin-left: 16px;
  }
`
