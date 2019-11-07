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

const extraTabs = (new Array(20)).fill(0).map((item, i) => ({
  tab: `extra-tab-${i}`,
  key: `extra-tab-${i}`,
  content: `extra tab(${i}) content`,
}))

const bunchTabs = [...tabs, ...extraTabs]

const shapes = ['pure', 'wrapped', 'capsule', 'text']

const Demo2 = () => (
  <div>
    { shapes.map((shape) => (
      <div key={shape} className="tab-demo2-box">
        <Tab shape={shape} onChange={onChange}>
          {bunchTabs.map(tab => <Tab.Item title={tab.tab} key={tab.key}>{tab.content}</Tab.Item>) }
        </Tab>
      </div>)) 
    }
  </div>
)

export default Demo2
