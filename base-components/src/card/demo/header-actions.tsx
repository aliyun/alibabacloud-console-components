/**
 * @title Header操作
 * @description Card.DropDownActions的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Card, Icon } from '@alicloudfe/components'

const commonProps = {
  extra: (
    <Card.DropDownActions
      actions={[
        {
          label: 'Action1',
          onClick: () => {
            console.log('Action1 clicked')
          }
        },
        {
          label: 'Action2',
          onClick: () => {
            console.log('Action2 clicked')
          }
        }
      ]}
    />
  )
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Card free style={{ width: 300 }}>
          <Card.Header title="Simple Card" {...commonProps} />
          <Card.Content>
            Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
            petentium quaerendum nec, eos ex recteque mediocritatem, ex usu
            assum legendos temporibus. Ius feugiat pertinacia an, cu verterem
            praesent quo.
          </Card.Content>
        </Card>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .card-placeholder {
    height: 200px;
  }
`
