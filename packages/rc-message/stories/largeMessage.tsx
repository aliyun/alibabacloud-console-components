import React from 'react'
import styled from 'styled-components'
import RcMessage from '@alicloud/console-components-message'

const dataSource = [
  {
    title: '标题标题',
    content:
      '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
  },
  {
    title: '标题标题2',
    content: '内容内容内容内容内容内容内容内容2',
  },
  {
    title: '标题标题3',
    content: '内容内容内容内容内容内容内容内容3',
  },
]

const LargeDemo: React.FC<{}> = () => (
  <Wrapper>
    <h2>强化消息提示</h2>
    <RcMessage closeable type="success" dataSource={dataSource} />
    <RcMessage closeable type="warning" dataSource={dataSource} />
    <RcMessage closeable type="error" dataSource={dataSource} />
    <RcMessage closeable type="info" dataSource={dataSource} />
    <RcMessage closeable type="notice" dataSource={dataSource} />
  </Wrapper>
)

export default LargeDemo

const Wrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  > h2 {
    margin-left: 16px;
  }
`
