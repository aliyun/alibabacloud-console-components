import React from 'react'
import { Tab, Button } from '@alicloud/console-components'

const handleChange = (key) => {
  console.log(key)
}

const handleClick = () => {
  console.log('click me')
}

const extraContent = <Button type="primary" onClick={handleClick}>Click Me</Button>

const Demo7 = () => (
  <div>
    <h6>Extra in Horizontal</h6>
    <Tab shape="wrapped" onChange={handleChange} extra={extraContent}>
      <Tab.Item title="Tab 1" key="1">Tab 1 Content</Tab.Item>
      <Tab.Item title="Tab 2" key="2">Tab 2 Content</Tab.Item>
      <Tab.Item title="Tab 3" key="3">Tab 3 Content</Tab.Item>
    </Tab>
  </div>
)

export default Demo7
