import React from 'react'
import { Menu } from '@alicloud/console-components'
import styled, { createGlobalStyle } from 'styled-components'

const { SubMenu, Item, Divider } = Menu

const MyContextMenuStyle = createGlobalStyle`
	.my-context-menu {
		width: 120px;
	}
`

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedKeys: [],
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(selectedKeys) {
    selectedKeys = selectedKeys.filter(key => {
      return ['sub-1', 'sub-2'].indexOf(key) > -1
    })
    this.setState({
      selectedKeys,
    })
  }

  createContextMenu = e => {
    e.preventDefault()

    const { target } = e
    const { top, left } = target.getBoundingClientRect()

    Menu.create({
      target: e.target,
      offset: [e.clientX - left, e.clientY - top],
      className: 'my-context-menu',
      popupClassName: 'my-context-menu',
      onItemClick: console.log,
      selectedKeys: this.state.selectedKeys,
      selectMode: 'multiple',
      onSelect: this.handleSelect,
      children: [
        <Item key="1">Option 1</Item>,
        <Item key="2">Option 2</Item>,
        <Item key="3">Option 3</Item>,
        <Divider key="divider-1" />,
        <SubMenu key="sub-menu" label="Sub menu">
          <Item key="sub-1">Sub option 1</Item>
          <Item key="sub-2">Sub option 2</Item>
        </SubMenu>,
        <Item key="4">Option 4</Item>,
        <Divider key="divider-2" />,
        <Item key="5">Option 5</Item>,
      ],
    })
  }

  render() {
    return (
      <SWrapper onContextMenu={this.createContextMenu}>
        <MyContextMenuStyle />
        Right click here to see the context menu!
      </SWrapper>
    )
  }
}

export default Demo

export const demoMeta = {
  zhName: '创建上下文菜单',
  zhDesc: `展示如何创建自定义的上下文菜单。`,
}

const SWrapper = styled.div`
  width: 500px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background: #ddd;
  border: 1px solid black;
`
