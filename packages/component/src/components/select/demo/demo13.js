import React, { Component }from 'react'
import { Select, Icon } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'
import './demo13.less'

const {AutoComplete} = Select

export default class Demo13 extends Component {
	
  constructor(props){
	super(props)
	this.state = {
      dataSource: []
    }
    this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange = (value) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
    this.searchTimeout = setTimeout( () => {
      fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`).then(
      	response => response.json()
      ).then( 
      	data => {
          const dataSource = data.result.map(item => {
            return {
              label: <div><Icon type="picture" size="small"/>&nbsp;{item[0]}</div>,
              value: item[1],
              originLabel: item[0]
            }
          })
          this.setState({dataSource:dataSource})
       })   
    }, 100)
  }

  render() {
    return (
      <div className="select-demo13-container">
        <AutoComplete onChange={this.handleChange}
          filterLocal={false}
          fillProps="originLabel"
          placeholder="search from taobao"
          dataSource={this.state.dataSource}/></div>
    )
  }
}