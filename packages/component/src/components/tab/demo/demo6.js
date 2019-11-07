import React, { Component } from 'react'
import { Tab, Select } from '@alicloud/console-components'
import './demo6.less'

const panes = [
  {
    tab: 'Todo Tasks',
    key: 0
  },
  {
    tab: 'Finished Tasks',
    key: 1
  },
  {
    tab: 'Unread Messages',
    key: 2
  },
  {
    tab: 'Past Messages',
    key: 3
  },
  {
    tab: 'All Messages',
    key: 4
  }
]

const detachedContentStyle = {
  border: '1px solid #00c1de',
  padding: '20px',
}

const CustomTabItem = ({ title, desc }) => (
  <div className="custom-tab-item">
    <div className="tab-title">{title}</div>
    <div className="tab-desc">{desc}</div>
  </div>
)


const customTabPanes = [
    { key: 'e-checking', title: 'Alipay', desc: 'The fee to be paid is $15' },
    { key: 'brand-card', title: 'Bank Card', desc: 'The fee to be paid is $17' },
]

const Demo6 = () => (
  <div className="tab-demo6-box">
    <div className="demo-item-title">Customize with contentStyle or contentClassName</div>
    <Tab shape="wrapped" contentStyle={detachedContentStyle}>
    {
      panes.map(pane => <Tab.Item title={pane.tab} key={pane.key}>{pane.tab}</Tab.Item>)
    }
    </Tab>

    <div className="demo-item-title">Setting className and style in Tab.Item</div>
    <Tab shape="wrapped" navStyle={{ background: '#DEE8FF' }}>
      {
        panes.map(pane => <Tab.Item
          title={pane.tab}
          key={pane.key}
          className="custom-tab-item"
          style={{background: '#FFF'}}
          >
            {pane.tab}
          </Tab.Item>
        )
      }
    </Tab>

    <div className="demo-item-title">Tabs with equal width</div>
    <Tab shape="capsule">
    {
      panes.map(pane => <Tab.Item title={pane.tab} key={pane.key} className="justify-tabs-tab">{pane.tab}</Tab.Item>)
    }
    </Tab>
    <div className="demo-item-title">自定义 tab</div>
    <Tab className="multiline-tab" shape="wrapped" tabRender={(key, props) => <CustomTabItem key={key} {...props} />}>
      {
        customTabPanes.map(pane => <Tab.Item key={pane.key} {...pane} tabStyle={{ height: '60px' }}>{pane.desc}</Tab.Item>)
      }
    </Tab>
  </div>
)

export default Demo6