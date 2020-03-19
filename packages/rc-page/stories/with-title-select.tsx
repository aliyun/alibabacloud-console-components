import React, { useState, useCallback } from 'react'
import { Button, Input } from '@alicloud/console-components'
// eslint-disable-next-line import/no-unresolved
import Page from '@alicloud/console-components-page'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

const { Breadcrumb } = Page

const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>Blog</Breadcrumb.Item>
    <Breadcrumb.Item>Name It, and They Will Come</Breadcrumb.Item>
  </Breadcrumb>
)

const titleSource = [
  {
    value: 'title1',
    label: '标题一',
  },
  {
    value: 'title2',
    label: '标题二',
  },
  {
    value: 'title3',
    label: '标题三',
  },
]

const subTitleSource = [
  {
    value: 'subTitle1',
    label: '二级标题一',
  },
  {
    value: 'subTitle2',
    label: '二级标题二',
  },
  {
    value: 'subTitle3',
    label: '二级标题三',
  },
]

const Example: React.FC<{}> = () => {
  const [headerAlignLeft, setHeaderAlignLeft] = useState(false)
  const [topBarAlignLeft, setTopBarAlignLeft] = useState(false)
  const [title, setTitle] = useState('Name It, and They Will Come')
  const [subTitle, setSubTitle] = useState('March 25, 2019')
  const [titleValue, setTitleValue] = useState('title1')
  const [subTitleValue, setSubTitleValue] = useState('subTitle1')

  const handleSelectTitle = useCallback((value, item) => {
    console.log('value:', value, 'item:', item)
    setTitleValue(value)
  }, [])

  const handleSelectSubTitle = useCallback((value, item) => {
    console.log('value:', value, 'item:', item)
    setSubTitleValue(value)
  }, [])

  return (
    <FakeBrowser>
      <Page>
        <Page.Header
          titleValue={titleValue}
          titleSource={titleSource}
          onSelectTitle={handleSelectTitle}
          subTitleValue={subTitleValue}
          subTitleSource={subTitleSource}
          onSelectSubTitle={handleSelectSubTitle}
          breadcrumb={breadcrumb}
          breadcrumbExtra={
            <>
              <a href="#a" style={{ verticalAlign: 'middle' }}>
                like
              </a>
              <Button
                size="small"
                style={{ marginLeft: 8 }}
                onClick={() => {
                  setTopBarAlignLeft(!topBarAlignLeft)
                }}
              >
                toggle align
              </Button>
            </>
          }
          breadcrumbExtraAlign={topBarAlignLeft ? 'left' : 'right'}
          hasBackArrow
          onBackArrowClick={() => {
            window.history.back()
          }}
          childrenAlign={headerAlignLeft ? 'left' : 'right'}
        >
          <a href="#a">Need some help</a>
          <Button
            style={{ marginLeft: 8 }}
            onClick={() => {
              setHeaderAlignLeft(!headerAlignLeft)
            }}
          >
            toggle align
          </Button>
        </Page.Header>
        <Page.Content>
          <div>
            change Title:
            <Input
              value={title}
              onChange={v => {
                setTitle(v)
              }}
            />
          </div>
          <div>
            change subTitle:
            <Input
              value={subTitle}
              onChange={v => {
                setSubTitle(v)
              }}
            />
          </div>
          <p>You’ve discovered something new.</p>
          <p>
            You haven’t seen solutions <strong>quite like this</strong> before.
            You try to keep your ego in check and be skeptical. But the
            butterflies in your stomach won’t listen.
          </p>
          <p>
            You don’t want to get carried away, but deep down you already know
            it:
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
}

export default Example
