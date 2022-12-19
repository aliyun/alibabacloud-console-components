import React from 'react'
import styled from 'styled-components'
import RcAnnouncement from '@alicloud/console-components-announcement'

const BasicDemo: React.FC<{}> = () => (
  <Wrapper>
    <h3>警示/报错类</h3>
    <RcAnnouncement
      type="warning"
      dataSource={[{ title: '您好！报错类轻量级使用黄色' }]}
    />
    <RcAnnouncement
      type="error"
      dataSource={[{ title: '您好！报错类稍重使用红色' }]}
    />
    <h3>成功提示/辅助信息</h3>
    <RcAnnouncement
      type="success"
      dataSource={[{ title: '您好！信息成功提示类，完成结果提醒请使用绿色' }]}
    />
    <h3>运营/信息/提示类</h3>
    <RcAnnouncement
      type="info"
      dataSource={[{ title: '您好！运营信息提示类，轻量级使用灰色' }]}
    />
    <RcAnnouncement
      type="notice"
      dataSource={[{ title: '您好！运营信息提示类，稍重使用蓝色' }]}
    />
    <RcAnnouncement
      type="notice"
      dataSource={[
        {
          title:
            '恭喜！您所提交的信息已经通过审核，如果有问题请联系客服。如果文案过长请折行如果文案过长请折行如果文案过长请折行如果文案过长请折行如果文案过长请折行如果文案过长请折行如果文案过长请折行如果文案过长请折行如果文案过长请折行',
        },
      ]}
    />
  </Wrapper>
)

export default BasicDemo

const Wrapper = styled.div`
  > div {
    margin-bottom: 8px;
  }
  h3 {
    margin-left: 16px;
  }
`
