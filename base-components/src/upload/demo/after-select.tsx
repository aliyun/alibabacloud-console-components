/**
 * @title 文件校验
 * @description afterSelect仅在 autoUpload=false 的时候生效
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button, Dialog } from '@alicloudfe/components'

const afterSelect = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        if (img.width === 1200) {
          resolve()
        } else {
          Dialog.alert({
            content: `Image width must be 1200px now ${img.width}px！`,
            closable: false,
            title: 'Warning'
          })
          reject()
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file.originFileObj)
  })
}

export default function DemoComponent() {
  const content = (
    <Upload
      action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
      autoUpload={false}
      listType="text"
      afterSelect={afterSelect}
      onError={(err) => console.log('Error', err)}
    >
      <Button>Upload</Button>
    </Upload>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
