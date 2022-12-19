/**
 * @title 按钮类型
 * @description 按钮有三种视觉层次：主按钮、次按钮、普通按钮。不同的类型可以用来区别按钮的重要程度。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Box } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Box direction="row" spacing={20}>
        <Button type="normal">Normal</Button>

        <Button type="primary" size="small">
          思考
        </Button>
        <Button type="primary" size="small">
          <>思考的</>
        </Button>
        <Button type="primary" size="small">
          思考的到
        </Button>

        <Button type="primary">思考</Button>
        <Button type="primary">思考的</Button>
        <Button type="primary">思考的到</Button>

        <Button type="primary" size="large">
          思考
        </Button>
        <Button type="primary" size="large">
          思考的
        </Button>
        <Button type="primary" size="large">
          思考的到
        </Button>
        <Button type="secondary" size="large">
          Secondary
        </Button>
      </Box>
      <br />
      <Box direction="row" spacing={20}>
        <Button type="normal" text>
          Normal
        </Button>
        <Button type="primary" text>
          Primary
        </Button>
        <Button type="secondary" text>
          Secondary
        </Button>
      </Box>
      <br />
      <Box direction="row" spacing={20}>
        <Button type="normal" warning>
          Normal
        </Button>
        <Button type="primary" warning>
          Primary
        </Button>
        <Button text warning>
          文字按钮
        </Button>
        <Button text warning type="primary">
          文字按钮
        </Button>
      </Box>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
