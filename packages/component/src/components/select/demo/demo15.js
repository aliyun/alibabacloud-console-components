import React, { Component }from 'react'
import { Select } from '@alicloud/console-components'
import classNames from 'classnames'
import './demo15.less'

/* eslint-disable react/prop-types, react/no-multi-comp */

// prevent onBlur
function preventDefault(e) {
  e.preventDefault()
}

class Menu extends Component {
  data = [{
    label: 'value1',
    value: 1
    }, {
    label: 'value2',
    value: 2
  }]

  onClick(item) {
    this.props.onChange(item)
  }

  renderItems() {
    return this.data.map(item => <li onClick={this.onClick.bind(this, item)} key={item.value}>{item.label}</li>)
   }
  
  render() {
    const {className, ...others} = this.props
    const cls = classNames('overlay-content', className)
    return (
      <ul className={cls} {...others}>
        {this.renderItems()}
      </ul>
    )
  }
}

export default class Demo15 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: null
    }
  }

  handleSelect = (value) => {
    this.setState({
      value,
      visible: false
    })
  }

  onVisibleChange = (visible) => {
    this.setState({
      visible
    })
  }

  render() {
    const popupContent = <Menu onChange={this.handleSelect} onMouseDown={preventDefault}/>

    return (
      <div className="select-demo15-container">
        <Select
          placeholder="custom popupContent"
          visible={this.state.visible}
          onVisibleChange={this.onVisibleChange}
          value={this.state.value}
          popupContent={popupContent} />
      </div>
    )
  }
}