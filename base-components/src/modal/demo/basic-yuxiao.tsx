import * as React from 'react'
import styled from 'styled-components'
import { Button, Modal, Icon } from '@alicloudfe/components'
const Demo = () => {
  const [visible, onVisibleChange] = React.useState(false)
  const onClose = () => {
    onVisibleChange(false)
  }
  const onOpen = () => {
    onVisibleChange(true)
  }
  return (
    <Style>
      <div>
        <Button onClick={onOpen}>打开Modal</Button>
        <Modal
          title="标题"
          visible={visible}
          onClose={onClose}
          onBack={onClose}
          hasArrow
        >
          <div className="custom-content" />
        </Modal>
      </div>
    </Style>
  )
}

export default Demo

const Style = styled.div`
  .custom-content {
    height: 2000px;
  }
`
