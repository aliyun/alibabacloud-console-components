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
  const [sideDrawerVisible, onSideDrawerVisibleChange] = React.useState(true)
  const [title, onChangeTitle] = React.useState('标题')
  return (
    <Style>
      <div>
        <Button onClick={onOpen}>打开Modal</Button>
        <Modal
          title={title}
          titleEditable
          onEditTitleChange={onChangeTitle}
          visible={visible}
          onClose={onClose}
          sideDrawerLabel="侧栏"
          sideDrawer={<div className="custom-content" />}
          sideDrawerVisible={sideDrawerVisible}
          onSideDrawerVisibleChange={onSideDrawerVisibleChange}
          operations={
            <>
              <Button type="secondary">
                {/* <Icon type="paper-pen" /> */}
                <Icon type="edit" />
                编辑
              </Button>
              <Button type="secondary">
                {/* <Icon type="save" /> */}
                <Icon type="success" />
                保存
              </Button>
            </>
          }
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
