/**
 * @title 延迟关闭
 * @description 在使用 `Dialog.alert`，`Dialog.confirm` 以及 `Dialog.show` 时，如果 `onOk` 返回 `Promise`，对话框会在 `Promise` resolve 时关闭，除非调用 `resolve(false)`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Message, Dialog } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    visible: false,
    loading: false
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onOk = () => {
    return new Promise((resolve) => {
      this.setState({
        loading: true
      })
      setTimeout(resolve, 2000)
    }).then(() => {
      Message.success('Deleted successfully!')
      this.setState({
        loading: false,
        visible: false
      })
    })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const okProps = {
      loading: this.state.loading
    }
    return (
      <div>
        <Button onClick={this.onOpen} type="primary">
          Dialog Promise
        </Button>
        <Dialog
          title="Welcome to Alibaba.com"
          visible={this.state.visible}
          okProps={okProps}
          onOk={this.onOk}
          onCancel={this.onClose}
          onClose={this.onClose}
        >
          Start your business here by searching a popular product
        </Dialog>
      </div>
    )
  }
}

const popupConfirm = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'Do you confirm deleting this content?',
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000)
      }).then(() => {
        Message.success('Deleted successfully!')
      })
    }
  })
}

export default function DemoComponent() {
  const content = (
    <div>
      <Demo />
      <br />
      <Button type="primary" warning onClick={popupConfirm}>
        Quick Confirm Promise
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
