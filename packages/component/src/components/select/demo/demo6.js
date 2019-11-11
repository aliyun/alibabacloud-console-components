import React from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'

const { Option, OptionGroup } = Select

const dataSource = [
  {
    label: 'label1',
    children: [
      {
        label: 'label1-1',
        value: 'text1-1',
      },
    ],
  },
  {
    label: 'label2',
    children: [
      {
        label: 'label2-1',
        value: 'text2-1',
      },
    ],
  },
]

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  .next-select {
    margin-right: 10px;
  }
`

const Demo6 = () => (
  <Wrapper>
    <Select placeholder="OptionGroup">
      <OptionGroup label="group1">
        <Option value="small">Small</Option>
        <Option value="medium">Medium</Option>
        <Option value="large">Large</Option>
      </OptionGroup>
      <OptionGroup label="group2">
        <Option value="small2">Small2</Option>
        <Option value="medium2">Medium2</Option>
        <Option value="large2">Large2</Option>
      </OptionGroup>
    </Select>
    <Select placeholder="optgroup">
      <Option value="apple">Apple</Option>
      <Option value="orange">Orange</Option>
      <Option value="banana">Banana</Option>
      <OptionGroup label="Pets Group">
        <Option value="cat">Cat</Option>
        <Option value="rabbit">Rabbit</Option>
        <Option value="dog" disabled>
          Dog
        </Option>
      </OptionGroup>
    </Select>
    <Select placeholder="item.children" dataSource={dataSource} />
  </Wrapper>
)

export default Demo6
