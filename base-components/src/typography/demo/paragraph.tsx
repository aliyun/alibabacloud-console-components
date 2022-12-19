/**
 * @title 段落
 * @description 一段文字
 */

import * as React from 'react'
import styled from 'styled-components'

import { Typography } from '@alicloudfe/components'

const { Paragraph } = Typography

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default function DemoComponent() {
  const content = (
    <div>
      <Paragraph>{content}</Paragraph>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
