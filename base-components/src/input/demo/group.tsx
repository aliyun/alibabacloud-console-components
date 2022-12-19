/**
 * @title 输入框组合
 * @description Group 具有两边长度固定中间组件任意伸缩的能力。在Input中可以用addonBefore/addonAfter快速使用
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input, Select, Button } from '@alicloudfe/components'

const select = (
  <Select aria-label="please select">
    <option value="https">https</option>
    <option value="http">http</option>
  </Select>
)
const button = <Button>search</Button>

export default function DemoComponent() {
  const content = (
    <div>
      <Input.Group addonBefore={select} addonAfter={button}>
        <Input
          hasClear
          defaultValue="abc"
          style={{ width: '100%' }}
          aria-label="please input"
        />
      </Input.Group>
      <br />
      <br />
      <Input
        addonTextAfter=".com"
        addonBefore={select}
        aria-label="please input"
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
