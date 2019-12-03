import React from 'react'
import styled from 'styled-components'
import { Button } from '@alicloud/console-components'
import RcMessage from '@alicloud/console-components-message'

const showSuccess = () => RcMessage.success('success')
const showWarning = () => RcMessage.warning('warning')
const showError = () => RcMessage.error('error')
const showNotice = () => RcMessage.notice('notice')
const showHelp = () => RcMessage.help('help')
const showLoading = () => RcMessage.loading('loading')
const show = () =>
  RcMessage.show({
    type: 'success',
    content: 'success',
    align: 'cc cc',
  })

const Demo6: React.FC<{}> = () => (
  <Wrapper>
    <h2>message全局快捷消息提示</h2>
    <Button onClick={showSuccess}>success</Button>
    <Button onClick={showWarning}>warning</Button>
    <Button onClick={showError}>error</Button>
    <Button onClick={showNotice}>notice</Button>
    <Button onClick={showHelp}>help</Button>
    <Button onClick={showLoading}>loading</Button>
    <Button onClick={show}>show</Button>
  </Wrapper>
)

export default Demo6

const Wrapper = styled.div`
  > button {
    margin-left: 8px;
  }
  > h2 {
    margin-left: 16px;
  }
`
