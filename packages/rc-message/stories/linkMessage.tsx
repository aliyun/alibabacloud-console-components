import React from 'react'
import styled from 'styled-components'
import RcMessage from '@alicloud/console-components-message'

const dataSource = [
  {
    title: '这是一条提示信息',
    link: (
      <a rel="noopener noreferrer" target="_blank" href="http://www.aliyun.com">
        查看详情
      </a>
    ),
  },
]

const Demo1: React.FC<{}> = () => (
  <Wrapper>
    <h2>带有link的消息提示</h2>
    <RcMessage type="success" dataSource={dataSource} />
    <RcMessage type="warning" dataSource={dataSource} />
    <RcMessage type="error" dataSource={dataSource} />
    <RcMessage type="info" dataSource={dataSource} />
    <RcMessage type="notice" dataSource={dataSource} />
  </Wrapper>
)

export default Demo1

const Wrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  > h2 {
    margin-left: 16px;
  }
`
