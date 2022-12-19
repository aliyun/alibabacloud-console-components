/**
 * @title 快捷调用
 * @description `Drawer` 提供 `alert` 和 `confirm` 的快掉调用方式，以及更底层的 `show` 方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import {
  Button,
  Drawer,
  ConfigProvider,
  Box,
  Message
} from '@alicloudfe/components'

let onHideA = null
let onHideB = null

const DrawerBProps = {
  title: 'AlertB',
  size: 'mini',
  onOk: () => {
    return true
  },
  onCancel: () => {
    alert('click cancel')
    return true
  },
  content: (
    <Button
      onClick={() => {
        onHideB?.()
      }}
    >
      Hide B
    </Button>
  )
}

export default function DemoComponent() {
  const [c, setC] = React.useState(<div>信息超过一屏的Drawer</div>)
  const DrawerAProps = {
    title: 'AlertA',
    size: 'small',
    onOk: () => {
      setTimeout(() => {
        setC(
          <div>
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            信息超过一屏的Drawer
            <br />
            Drawer的底部
            <br />
          </div>
        )
      }, 2000)
      return false
    },
    onCancel: () => {
      // alert('click cancel')
      return true
    },
    content: c
  }
  const popupShow = () => {
    const { hide, show } = Drawer.show(DrawerAProps)
    onHideA = hide
  }
  const content = (
    <ConfigProvider locale={{ Dialog: { ok: 'OK', cancel: 'Cancel' } }}>
      <Box direction="row" spacing={20}>
        <Button onClick={popupShow} type="primary">
          Show
        </Button>
      </Box>
    </ConfigProvider>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
