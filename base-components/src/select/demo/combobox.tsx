/**
 * @title 输入框辅助完成
 * @description `AutoComplete` 继承了 `Input` 的能力，并在其基础上增加了 autoComplete 的功能。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const dataSource = [
  'Lucy King',
  'Lily King',
  'Jim Green',
  {
    label: 'Chinese',
    children: [
      { value: 'Hang Meimei', label: 'Hang Meimei' },
      'Li Lei',
      { value: 'Gao Hui', label: 'Gao Hui', disabled: true },
      'Zhang San',
      'Li Si',
      'Wang Wu',
      { value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true },
      'Sun Yang',
      'Song Shuying'
    ]
  },
  {
    label: 'Pets',
    children: ['Poly', 'Kitty']
  }
]

const onChange = (v) => {
  console.log(v)
}

export default function DemoComponent() {
  const content = (
    <Select.AutoComplete
      autoHighlightFirstItem={false}
      style={{ width: 300 }}
      onChange={onChange}
      dataSource={dataSource}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
