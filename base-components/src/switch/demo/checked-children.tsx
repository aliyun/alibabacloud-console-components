/**
 * @title 文字和图标
 * @description 带有文字说明和图标
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch, Icon } from '@alicloudfe/components'

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

export default function DemoComponent() {
  const content = (
    <div>
      <Switch
        checkedChildren="on"
        unCheckedChildren="off"
        onChange={onChange}
      />
      <br />
      <Switch
        checkedChildren="已启用"
        unCheckedChildren="已关闭"
        onChange={onChange}
        style={{ width: 76 }}
      />
      <br />
      <Switch
        checkedChildren={<Icon type="select" size="xs" />}
        unCheckedChildren={<Icon type="close" size="xs" />}
        onChange={onChange}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
