import React from 'react'
import { Checkbox } from '@alicloud/console-components'

const Group = () => (
  <div>
    <h4>Normal Group</h4>
    <div>
      <Checkbox.Group>
        <Checkbox>1st item</Checkbox>
        <Checkbox>2nd item</Checkbox>
        <Checkbox>3rd item</Checkbox>
        <Checkbox>4nd item</Checkbox>
      </Checkbox.Group>
    </div>
    <h4>Vertical Group</h4>
    <div>
      <Checkbox.Group itemDirection="ver">
        <Checkbox>1st item</Checkbox>
        <Checkbox>2nd item</Checkbox>
        <Checkbox>3rd item</Checkbox>
        <Checkbox>4nd item</Checkbox>
      </Checkbox.Group>
    </div>
  </div>
)

export default Group
