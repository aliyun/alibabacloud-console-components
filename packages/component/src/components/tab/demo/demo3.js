import React from 'react'
import { Tab } from '@alicloud/console-components'
import './demo2.less'

const onChange = (key) => {
  console.log(key)
}

const tabs = [
  { tab: 'Home', key: 'home', content: 'This is home page' },
  { tab: 'Document', key: 'doc', content: 'This is document page' },
  { tab: 'API', key: 'api', content: 'This is api page' },
  { tab: 'Repo', key: 'repo', content: 'This ia repo link' },
]

const shapes = ['pure', 'wrapped', 'capsule', 'text']

const Demo3 = () => (
  <div>
    <Tab shape="wrapped">
      <Tab.Item title="Home">Home content</Tab.Item>
      <Tab.Item title="Documentation">Doc content</Tab.Item>
      <Tab.Item title="Help">Help Content</Tab.Item>
    </Tab>
    <br/><br/>
    <Tab shape="wrapped" size="small">
      <Tab.Item title="Home">Home content</Tab.Item>
      <Tab.Item title="Documentation">Doc content</Tab.Item>
      <Tab.Item title="Help">Help Content</Tab.Item>
    </Tab>
    <br/><br/>

    <Tab shape="capsule">
      <Tab.Item title="Home">Home content</Tab.Item>
      <Tab.Item title="Documentation">Doc content</Tab.Item>
      <Tab.Item title="Help">Help Content</Tab.Item>
    </Tab>
    <br/><br/>
    
    <Tab shape="capsule" size="small">
      <Tab.Item title="Home">Home content</Tab.Item>
      <Tab.Item title="Documentation">Doc content</Tab.Item>
      <Tab.Item title="Help">Help Content</Tab.Item>
    </Tab>
  </div>
)

export default Demo3
