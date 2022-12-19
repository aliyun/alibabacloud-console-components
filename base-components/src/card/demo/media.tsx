/**
 * @title 多媒体内容
 * @description 下面是一个使用图像来增强内容的卡片示例。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Card, Button } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <Card className="media-card" free>
      <Card.Media>
        <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
      </Card.Media>
      <Card.Header
        title="Title"
        subTitle="Sub Title"
        extra={[
          <Button type="primary" key="action1" text>
            More
          </Button>
        ]}
      />
      <Card.Content>
        Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
        petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
        legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
        quo.
      </Card.Content>
      <Card.Actions>
        <Button type="primary" key="action1" text>
          Action 1
        </Button>
        <Button type="primary" key="action2" text>
          Action 2
        </Button>
      </Card.Actions>
    </Card>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .media-card {
    width: 300px;
  }

  .custom-card p {
    color: #999;
  }
`
