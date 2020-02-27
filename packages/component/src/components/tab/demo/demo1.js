import React from 'react'
import { Tab } from '@alicloud/console-components'

const Demo1 = () => (
  <div>
    <Tab>
      <Tab.Item title="Your Projects">
        <p>Your projects...</p>
      </Tab.Item>
      <Tab.Item title="Starred Projects">
        <p>Starred projects...</p>
      </Tab.Item>
      <Tab.Item disabled title="Explore Projects">
        <p>Explore projects...</p>
      </Tab.Item>
    </Tab>
  </div>
)

export default Demo1
