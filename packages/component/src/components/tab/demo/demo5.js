import React, { Component } from 'react'
import { Tab, Select } from '@alicloud/console-components'
import './demo5.less'

const tabs = [
  { tab: 'Home', key: 0, content: 'This is home page' },
  { tab: 'Document', key: 1, content: 'This is document page' },
  { tab: 'API', key: 2, content: 'This is api page' },
]

const onChange = (key) => {
  console.log("change", key)
}

const handleClick = (key) => {
  console.log("click", key)
}

const onMouseEnter = (key, e) => {
  console.log('enter', e.target, key)
}

const onMouseLeave = (key, e) => {
  console.log("leave", e.target, key)
}

const Demo5 = () => (
  <div className="tab-demo5-box">
    <h6>Click to trigger change</h6>
    <Tab triggerType="click" onChange={onChange}>
      {
        tabs.map(item => <Tab.Item key={item.key} title={item.tab} onClick={handleClick}>{item.content}</Tab.Item>)
      }
    </Tab>
    <h6>Hover to trigger change</h6>
    <Tab triggerType="hover" onChange={onChange}>
      {
        tabs.map(item => <Tab.Item
          key={item.key}
          title={item.tab}
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {item.content}
        </Tab.Item>)
      }
    </Tab>
  </div>
)

export default Demo5