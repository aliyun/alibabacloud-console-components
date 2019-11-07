import React, { Component } from 'react'
import { Input, Icon } from '@alicloud/console-components'

const onChange = (v) => {
  console.log(v)
}

const onBlur = (e) => {
  console.log(e)
}

class Demo4 extends Component {
  state = {
      v: '',
  };

  onChange = (v) => {
      this.setState({
          v
      });
  };

  onClick = () => {
      console.log(this.state.v);
  };

  render() {

    return (
      <div>
        <Input
          innerBefore={<Icon type="search" style={{marginLeft: 4}}  onClick={this.onClick} />}
          placeholder="search"
          value={this.state.v}
          onChange={this.onChange}
        />
        <br />
        <br />
        <Input
          innerAfter={<Icon type="search" size="xs" onClick={this.onClick} style={{marginRight: 4}}/>}
          placeholder="search"
          value={this.state.v}
          onChange={this.onChange}
        />
      </div>
    )
  }
}


export default Demo4
