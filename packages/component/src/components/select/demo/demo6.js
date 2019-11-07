import React, { Component }from 'react'
import { Select, Button } from '@alicloud/console-components'
import './demo6.less'

const {Option, OptionGroup} = Select;

const dataSource = [{
  label: 'label1',
  children: [{
    label: 'label1-1',
    value: 'text1-1'
    }]
  }, {
    label: 'label2',
    children: [{
      label: 'label2-1',
      value: 'text2-1'
    }]
}]

const Demo6 = () => (
  <div className="select-demo6-container">
    <Select placeholder="OptionGroup" className="b">
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
    <Select placeholder="optgroup" className="b">
      <option value="apple">Apple</option>
      <option value="orange">Orange</option>
      <option value="banana">Banana</option>
      <optgroup label="Pets Group">
        <option value="cat">Cat</option>
        <option value="rabbit">Rabbit</option>
        <option value="dog" disabled>Dog</option>
      </optgroup>
    </Select>
    <Select placeholder="item.children" dataSource={dataSource} className="b" />
  </div>
)

export default Demo6