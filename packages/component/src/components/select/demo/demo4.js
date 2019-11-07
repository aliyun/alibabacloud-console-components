import React, { Component }from 'react'
import { Select } from '@alicloud/console-components'
import './demo4.less'

const dataSource = [
  {value: '10001', label: 'Lucy King'},
  {value: 10002, label: 'Lily King'},
  {value: 10003, label: 'Tom Cat', disabled: true},
  {label: 'Special Group', children: [
    {value: new Date(), label: 'new Date()'},
    {value: false, label: 'FALSE'},
    {value: 0, label: 'ZERO'}
    ]
  },
]

const ctrlDataSources = {
  mode: ['single', 'multiple', 'tag'],
  size: ['small', 'medium', 'large'],
  showSearch: [true, false],
  hasArrow: [true, false],
  hasBorder: [true, false],
}

export default class Demo4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      size: undefined,
      mode: undefined,
      hasArrow: undefined,
      hasBorder: undefined,
      showSearch: undefined,
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

  handleChange(value, item) {
    console.log('handleChange: value: ', value, item);
    this.setState({value})
  }

  renderCtrlNodes(state) {
    const ctrlNodes = []
    let k;
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
      <div className="select-demo4-container">
        <div className="select-demo4-controller">{this.renderCtrlNodes(this.state)}</div>
        <Select className="select-choice" {...this.state} onChange={this.handleChange} dataSource={dataSource} />
      </div>
    )
  }
}

