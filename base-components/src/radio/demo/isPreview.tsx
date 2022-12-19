/**
 * @title 预览状态
 * @description `Radio`预览状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio, Switch } from '@alicloudfe/components'

class App extends React.Component {
  state = {
    isPreview: true,
    checked: true
  }

  togglePreview = () => {
    this.setState({
      isPreview: !this.state.isPreview
    })
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  renderChecked = (checked, props) =>
    checked ? <span>{props.children}</span> : <span>null</span>

  renderPreview = (previewed, props) => <span>{previewed.label}</span>

  render() {
    return (
      <React.Fragment>
        toggle checked:
        <Switch
          size="small"
          defaultChecked
          onChange={this.toggleCheck}
          style={{ verticalAlign: 'middle', marginRight: 30 }}
        />
        toggle isPreview:{' '}
        <Switch
          size="small"
          defaultChecked
          onChange={this.togglePreview}
          style={{ verticalAlign: 'middle' }}
        />
        <br />
        <br />
        <span style={{ fontSize: 14 }}>Single: </span>
        <Radio
          className="radio-preview-inline"
          checked={this.state.checked}
          isPreview={this.state.isPreview}
          renderPreview={this.renderChecked}
        >
          Radio
        </Radio>
        <br />
        <span style={{ fontSize: 14 }}>Group: </span>
        <Radio.Group
          className="radio-group-preview-inlline"
          name="radio"
          defaultValue={'react'}
          isPreview={this.state.isPreview}
          renderPreview={this.renderPreview}
        >
          <Radio value="react">React</Radio>
          <Radio value="vue">Vue</Radio>
          <Radio value="angular">Angular</Radio>
        </Radio.Group>
      </React.Fragment>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .radio-preview-inline {
    display: inline-block;
    margin-left: 8px;
    line-height: 40px;
  }

  .radio-group-preview-inlline {
    display: inline-block;
    margin-left: 8px;
    line-height: 40px;
  }
`
