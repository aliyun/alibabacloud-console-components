/**
 * @title 无障碍支持
 * @description 若要使用无障碍的Dropdown，推荐使用`<Dropdown triggerType={["click", "hover"]}>` (请勿使用triggerType="focus")。菜单类元素需要由用户确认后再展开才是一种无障碍友好的实践。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Dropdown, Menu } from '@alicloudfe/components'

const menu = (
  <Menu>
    <Menu.Item>Option 1</Menu.Item>
    <Menu.Item>Option 2</Menu.Item>
    <Menu.Item>Option 3</Menu.Item>
    <Menu.Item>Option 4</Menu.Item>
  </Menu>
)

export default function DemoComponent() {
  const content = (
    <div>
      <Dropdown
        trigger={<button>Hello dropdown</button>}
        triggerType={['click', 'hover']}
        afterOpen={() => console.log('after open')}
      >
        {menu}
      </Dropdown>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
