/**
* @title without-title
*/

import React from 'react'
import Page from '@alicloud/console-components-page'

const { Breadcrumb } = Page

const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Blog</Breadcrumb.Item>
    <Breadcrumb.Item>Name It, and They Will Come</Breadcrumb.Item>
  </Breadcrumb>
)

const Example = () => (
  <Page>
    <Page.Header breadcrumb={breadcrumb} />
    <Page.Content>
      <p>This page has no title.</p>
    </Page.Content>
  </Page>
)

export default Example
