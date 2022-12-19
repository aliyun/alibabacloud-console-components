/**
 * @title width-overflow
 */

import React from 'react'
import Page from '@alicloud/console-components-page'

const { Breadcrumb, Menu } = Page

const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Blog</Breadcrumb.Item>
    <Breadcrumb.Item>Name It, and They Will Come</Breadcrumb.Item>
  </Breadcrumb>
)

// eslint-disable-next-line react/prop-types
const CustomMenu = ({ itemCount }: any) => (
  <Menu>
    {new Array(itemCount).fill(1).map((item, i) => (
      <Menu.Item key={`section-${i + 1}`}>Section {i + 1}</Menu.Item>
    ))}
  </Menu>
)

const Demo = () => {
  return (
    // 模拟浏览器视窗
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <Page>
        <Page.Header
          title="Name It, and They Will Come"
          subTitle="March 25, 2019"
          breadcrumb={breadcrumb}
        />
        <Page.Content menu={<CustomMenu itemCount={5} />}>
          <div
            style={{
              border: '1px solid red',
              width: '2000px',
              height: '4000px',
            }}
          >
            This is a big content.
          </div>
        </Page.Content>
      </Page>
    </div>
  )
}

export default Demo
