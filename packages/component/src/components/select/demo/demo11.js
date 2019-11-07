import React, { Component }from 'react'
import { Select } from '@alicloud/console-components'
import './demo11.less'

const {AutoComplete} = Select

const dataSource = [
  'Lucy King',
  'Lily King',
  'Jim Green',
  {
    label: 'Chinese',
    children: [
      {value: 'Hang Meimei', label: 'Hang Meimei'},
      'Li Lei',
      {value: 'Gao Hui', label: 'Gao Hui', disabled: true},
      'Zhang San',
      'Li Si',
      'Wang Wu',
      {value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true},
      'Sun Yang',
      'Song Shuying'
    ]
  },
  {
    label: 'Pets',
    children: [
      'Poly',
      'Kitty'
    ]
  }
]

const ctrlDataSources = {
  size: ['small', 'medium', 'large'],
  disabled: [true, false],
  hasClear: [true, false]
}

export default class Demo11 extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: null,
      size: undefined,
      disabled: undefined,
      hasClear: undefined,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCtrlChange = this.handleCtrlChange.bind(this)
  }

  handleCtrlChange(key, value) {
    this.setState({[key]: value})
    if (key === 'mode') {
      this.setState({value: null})
    }
  }

  handleChange(value) {
    console.log('handleChange: value: ', value);
    this.setState({value});
  }

  renderCtrlNodes(state) {
    const ctrlNodes = [];
    let k
    for (k in ctrlDataSources) {
      if (ctrlDataSources.hasOwnProperty(k)) {
        ctrlNodes.push(
          <Select key={k}
            label={`${k}: `}
            value={state[k]}
            dataSource={ctrlDataSources[k]}
            onChange={this.handleCtrlChange.bind(this, k)} />
        )
      }
    }
    return ctrlNodes
  }

  render() {
    return (
      <div className="select-demo11-container">
        <div className="demo-controller">{this.renderCtrlNodes(this.state)}</div>
          <AutoComplete className="complete-auto"
            {...this.state}
            style={{maxWidth: 300}}
            onChange={this.handleChange}
            dataSource={dataSource} />
        </div>
    )
  }
}
