import React from 'react'
import { Button, Icon } from '@alicloud/console-components'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'
import Page from '@alicloud/console-components-page'

const { Breadcrumb } = Page

const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Blog</Breadcrumb.Item>
    <Breadcrumb.Item>Name It, and They Will Come</Breadcrumb.Item>
  </Breadcrumb>
)

const Example: React.FC<{}> = () => (
  <FakeBrowser>
    <Page>
      <Page.Header
        title="Name It, and They Will Come longgggg ggggggg ggggg gggggg ggggggg gggggg gggggg ggggg gggggg ggggg ggggg gggggggg"
        subTitle="March 25, 2019"
        breadcrumb={breadcrumb}
        hasBackArrow
        onBackArrowClick={() => {
          window.history.back()
        }}
        childrenAlign="right"
      >
        <a href="#a">Need some help</a>
        <Button style={{ marginLeft: 8 }}>
          <Icon type="smile" />
        </Button>
      </Page.Header>
      <Page.Content>
        <p>You’ve discovered something new.</p>
        <p>
          You haven’t seen solutions <strong>quite like this</strong> before.
          You try to keep your ego in check and be skeptical. But the
          butterflies in your stomach won’t listen.
        </p>
        <p>
          You don’t want to get carried away, but deep down you already know it:
        </p>
        <p>
          <strong>You’re onto something.</strong>
        </p>
        <p>
          This idea turns into a project. The first commit is just 500 lines.
          But in a few days, you build it up just enough to start using it in
          real code. A few like-minded people join you in improving it. You
          learn something new about it every day.
        </p>
        <p>You’re still skeptical but you can’t pretend to ignore it:</p>
        <p>
          <strong>This idea has wings.</strong>
        </p>
        <p>
          You encounter many obstacles. They require you to make changes.
          Peculiarly, these changes only make the original idea stronger.
          Usually, you feel like you’re creating something. But this time, it
          feels like you are discovering something as if it already existed.
          You’ve chosen a principle and followed it to the conclusion.
        </p>
        <p>By now, you’re convinced:</p>
        <p>
          <strong>This idea deserves to be heard.</strong>
        </p>
      </Page.Content>
    </Page>
  </FakeBrowser>
)

export default Example
