/**
 * @title 文件大小、长宽限制
 * @description 设置图片最大宽度为 1200，最大占据磁盘空间大小为2M。思路是在 `beforeUpload` 这个阶段，获取到文件对象，判断文件对象是否符合要求。（注意IE9不支持File这个浏览器原生对象）
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Dialog, Button } from '@alicloudfe/components'

const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.total > 2 * 1024 * 1024) {
        Dialog.alert({
          content: `File size must be < 2M`,
          closable: false,
          title: 'Warning'
        })
        reject()
        return
      }
      const img = new Image()
      img.onload = () => {
        if (img.width <= 1200) {
          resolve()
        } else {
          Dialog.alert({
            content: `Image width ${img.width}px, Exceed limits！`,
            closable: false,
            title: 'Warning'
          })
          reject()
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

export default function DemoComponent() {
  const content = (
    <Upload
      action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
      limit={3}
      multiple
      beforeUpload={beforeUpload}
      listType="text"
      defaultValue={[
        {
          name: 'IMG.png',
          state: 'done',
          size: 1024,
          downloadURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          fileURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        }
      ]}
    >
      <Button type="primary" style={{ margin: '0 0 10px' }}>
        Upload file
      </Button>
    </Upload>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
