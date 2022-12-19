import React from 'react'
import styled from 'styled-components'
import RcAnnouncement from '@alicloud/console-components-announcement'

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

const LinkDemo: React.FC<{}> = () => (
  <Wrapper>
    <h2>带有link的消息提示</h2>
    <RcAnnouncement type="success" dataSource={dataSource} />
    <RcAnnouncement type="warning" dataSource={dataSource} />
    <RcAnnouncement type="error" dataSource={dataSource} />
    <RcAnnouncement type="info" dataSource={dataSource} />
    <RcAnnouncement type="notice" dataSource={dataSource} />
  </Wrapper>
)

export default LinkDemo

const Wrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  > h2 {
    margin-left: 16px;
  }
`
