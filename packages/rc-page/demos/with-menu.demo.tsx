/**
 * @title with-menu
 */

import React, { useState, useCallback } from 'react'
import { NumberPicker } from '@alicloud/console-components'
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
const CustomMenu: React.FC<{ itemCount: number }> = ({ itemCount }) => (
  <Menu>
    {new Array(itemCount).fill(1).map((item, i) => {
      if (i === itemCount - 2) {
        return (
          <Menu.SubMenu label="sub-menu">
            {new Array(itemCount).fill(1).map((item, i) => (
              <Menu.Item key={`sub-${i + 1}`}>Sub {i + 1}</Menu.Item>
            ))}
          </Menu.SubMenu>
        )
      }
      return <Menu.Item key={`section-${i + 1}`}>Section {i + 1}</Menu.Item>
    })}
  </Menu>
)

// eslint-disable-next-line react/prop-types
const Content: React.FC<{ repeat: number }> = ({ repeat }) => (
  <>
    {new Array(repeat).fill(1).map(() => (
      <>
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
      </>
    ))}
  </>
)

const Example: React.FC<{}> = () => {
  const [menuItemCount, setMenuItemCount] = useState(5)
  const [contentRepeatCount, setContentRepeatCount] = useState(1)

  const onMenuItemCountChange = useCallback((value) => {
    setMenuItemCount(value)
  }, [])

  const onContentRepeatCountChange = useCallback((value) => {
    setContentRepeatCount(value)
  }, [])

  return (
    // 模拟浏览器视窗
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <Page>
        <Page.Header
          title="Name It, and They Will Come"
          subTitle="March 25, 2019"
          breadcrumb={breadcrumb}
        />
        <Page.Content menu={<CustomMenu itemCount={menuItemCount} />}>
          <div>
            <h6>Menu Item Count: </h6>
            <NumberPicker
              min={1}
              value={menuItemCount}
              onChange={onMenuItemCountChange}
            />
          </div>
          <div>
            <h6>Repeat Content Times: </h6>
            <NumberPicker
              min={0}
              value={contentRepeatCount}
              onChange={onContentRepeatCountChange}
            />
          </div>
          <Content repeat={contentRepeatCount} />
        </Page.Content>
      </Page>
    </div>
  )
}

export default Example
