import React, { Component }from 'react'
import { Select, Button } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'

let timestamp = Date.now()

export default class Demo8 extends Component {
	
  constructor(props){
	super(props)
	this.state = {
      dataSource: []
    }
	this.handleSearch=this.handleSearch.bind(this)
	}
  
  handleSearch = (value) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
    this.searchTimeout = setTimeout(() => {
      value ? fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`).then(
      	response => response.json()
      ).then(
        data => {
          const dataSource = data.result.map(item => ({
            label: item[0], value: (timestamp++).toString(36)
          }))
          this.setState({dataSource:dataSource})
        }
      ) : 
      this.setState({dataSource: []})
    }, 100)
  }

  render() {
    return (
      <div className="demo-container">
        <Select
          showSearch 
          placeholder="select search" 
          filterLocal={false} 
          dataSource={this.state.dataSource} 
          onSearch={this.handleSearch} 
          style={{width: 200}}/>
      </div>
    )
  }
}