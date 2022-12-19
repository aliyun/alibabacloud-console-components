/**
 * @title 可编辑的 Tab
 * @description Tab 允许开发者在上层进行自由的行为控制，例如用户可以基于 Tab 开发一个标题部分双击可编辑的 Tab ，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab, Input } from '@alicloudfe/components'

class EditableTabPane extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabTitle: props.defaultTitle,
      editable: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultTitle !== this.state.tabTitle) {
      this.setState({
        tabTitle: nextProps.defaultTitle
      })
    }
  }

  onKeyDown = (e) => {
    const { keyCode } = e
    // Stop bubble up the events of keyUp, keyDown, keyLeft, and keyRight
    if (keyCode > 36 && keyCode < 41) {
      e.stopPropagation()
    }
  }

  onBlur = (e) => {
    this.setState({
      editable: false,
      tabTitle: e.target.value
    })
  }

  onDblClick = () => {
    this.setState({
      editable: true
    })
  }

  render() {
    const { tabTitle, editable } = this.state
    if (editable) {
      return (
        <Input
          defaultValue={tabTitle}
          onKeyDown={this.onKeyDown}
          onBlur={this.onBlur}
        />
      )
    }
    return <span onDoubleClick={this.onDblClick}>{tabTitle}</span>
  }
}

const tabRender = (key, { title }) => (
  <div key={key} className="editable-tab-wrapper">
    <EditableTabPane defaultTitle={title} />
  </div>
)

export default function DemoComponent() {
  const content = (
    <Tab defaultActiveKey="1" tabRender={tabRender}>
      <Tab.Item title="Double Click To Edit Me" key="1">
        Editable tab
      </Tab.Item>
      <Tab.Item title="Double Click To Edit Me" key="2">
        Editable tab
      </Tab.Item>
    </Tab>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .editable-tab-wrapper {
    padding: 10px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
