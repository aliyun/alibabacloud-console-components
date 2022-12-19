/**
 * @title 抽屉式选择
 * @description 将 Select 的弹出模式换成 Drawer
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio, Drawer, Select } from '@alicloudfe/components'

const Option = Select.Option

const onChange = function (value) {
  console.log(value)
}
const onBlur = function (e) {
  console.log(/onblur/, e)
}

const onToggleHighlightItem = function (item, type) {
  console.log(item, type)
}

class Demo extends React.Component {
  state = {
    placement: 'right'
  }

  onPlacementChange = (dir) => {
    this.setState({
      placement: dir
    })
  }

  render() {
    const drawerProps = {
      placement: this.state.placement,
      closeMode: 'mask',
      bodyStyle: { padding: 0 }
    }
    return (
      <div>
        <Radio.Group
          dataSource={['right', 'bottom', 'left', 'top']}
          defaultValue={'right'}
          onChange={this.onPlacementChange}
        />
        <br />
        <br />
        <Select
          id="basic-demo"
          popupComponent={Drawer}
          popupProps={drawerProps}
          autoWidth={false}
          onChange={onChange}
          onBlur={onBlur}
          onToggleHighlightItem={onToggleHighlightItem}
          defaultValue="jack"
          aria-label="name is"
          hasClear
        >
          <Option value="jack">Jack</Option>
          <Option value="frank">Frank</Option>
          <Option value="hugo">Hugo</Option>
        </Select>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
