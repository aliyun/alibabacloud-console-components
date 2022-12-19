/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Card, Button } from '@alicloudfe/components'

const commonProps = {
  subTitle: 'SubTitle',
  extra: (
    <Button text type="primary">
      Link
    </Button>
  )
}

export default function DemoComponent() {
  const content = (
    <div>
      <Card free style={{ width: 300 }}>
        <Card.Header title="Simple Card" {...commonProps} />
        <Card.Content>
          Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
          petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
          legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
          quo.
        </Card.Content>
      </Card>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .card-placeholder {
    height: 200px;
  }
`
