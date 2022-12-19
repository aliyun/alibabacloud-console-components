/**
 * @title 无障碍支持
 * @description 通过`aria-labelledby`给Group设置辅助技术可及的文本，按键请参考后文[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

const RadioGroup = Radio.Group

export default function DemoComponent() {
  const content = (
    <div>
      <span id="radio-a11y">Programming language ：</span>
      <RadioGroup aria-labelledby="radio-a11y">
        <Radio id="python" value="python">
          python
        </Radio>
        <Radio id="java" value="java">
          java
        </Radio>
        <Radio id="c" value="c">
          c
        </Radio>
      </RadioGroup>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
