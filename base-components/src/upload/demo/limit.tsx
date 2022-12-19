/**
 * @title 个数限制
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alicloudfe/components'

const onError = (file, fileList) => {
  console.log('Exceed limit', file, fileList)
}

export default function DemoComponent() {
  const content = (
    <div>
      <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        limit={2}
        multiple
        listType="text"
        onError={onError}
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
          Upload File
        </Button>
      </Upload>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
