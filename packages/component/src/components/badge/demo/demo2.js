import React, { Component } from 'react'
import { Badge, Button, Icon } from '@alicloud/console-components'
import './demo2.less'

const ButtonGroup = Button.Group;
export default class BadgeDemo2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 5,
      show: true
    }
  }
  
  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  decrease= () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count: count });
  }

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="badge-demo2-container">
        <h3>动态</h3>
        <br />
        <div className="change-count">
          <Badge count={this.state.count}>
            <a href="#" className="head-example"></a>
          </Badge>
          <ButtonGroup>
            <Button onClick={this.increase}>
              <Icon type="add"/>
            </Button>
            <Button onClick={this.decrease}>
              <Icon type="minus" />
            </Button>
          </ButtonGroup>
        </div>
        <br/><br/>
        <div>
          <Badge dot={this.state.show}>
            <a href="#" className="head-example"></a>
          </Badge>
          <Button onClick={this.onClick}>
            切换红点显隐
          </Button>
        </div>
      </div>
    )
  }

}