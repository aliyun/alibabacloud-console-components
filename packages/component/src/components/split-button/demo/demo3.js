import React from 'react'
import { SplitButton } from '@alicloud/console-components'

const { Item } = SplitButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>)

export default class Demo3 extends React.Component {
  state = {
    visible: false,
    label: 'Choose Action',
  }

  onSelect = val => {
    this.setState({
      visible: false,
      label: val,
    })
  }

  changeVisible = visible => {
    this.setState({
      visible,
    })
  }

  render() {
    const { visible, label } = this.state
    return (
      <SplitButton 
        label={label} 
        visible={visible} 
        onVisibleChange={this.changeVisible} 
        onItemClick={this.onSelect}>
        {menu}
      </SplitButton>
    )
  }
}
