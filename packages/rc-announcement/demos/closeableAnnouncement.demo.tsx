import React from 'react'
import styled from 'styled-components'
import RcAnnouncement from '@alicloud/console-components-announcement'

const dataSource = [
  {
    title: '标题标题标题标题标',
  },
]

const CloseableDemo: React.FC<{}> = () => (
  <Wrapper>
    <h2>可关闭的信息提示</h2>
    <RcAnnouncement closeable type="success" dataSource={dataSource} />
    <RcAnnouncement closeable type="warning" dataSource={dataSource} />
    <RcAnnouncement closeable type="error" dataSource={dataSource} />
    <RcAnnouncement closeable type="info" dataSource={dataSource} />
    <RcAnnouncement closeable type="notice" dataSource={dataSource} />
  </Wrapper>
)

export default CloseableDemo

const Wrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  > h2 {
    margin-left: 16px;
  }
`
