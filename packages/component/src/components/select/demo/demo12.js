import React, { Component }from 'react'
import { Select } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'
import './demo12.less'

const {AutoComplete} = Select

export default class Demo12 extends React.Component {
	
  constructor(props){
	super(props)
	this.state = {
      dataSource: []
    }
	this.handleChange=this.handleChange.bind(this)
  }

  handleChange = (value) => {
    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`).then(
        response => response.json()
      ).then(
      	data => {
          const dataSource = data.result.map(item => item[0])
          this.setState({dataSource:dataSource})
        })
    }, 100)
  }

  render() {
    return (
      <div className="select-demo12-container">
        <AutoComplete
          filterLocal={false}
           placeholder="search from taobao"
           onChange={this.handleChange}
           dataSource={this.state.dataSource}/>
      </div>
    )
  }
}
