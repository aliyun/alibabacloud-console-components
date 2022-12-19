/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Paragraph } from '@alicloudfe/components'

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default function DemoComponent() {
  const content = (
    <div>
      <Paragraph>{content}</Paragraph>
      <br />
      <Paragraph size="small">{content}</Paragraph>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
