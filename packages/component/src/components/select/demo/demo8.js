import React, { Component, useState } from 'react'
import { Select, Button } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'

let timestamp = Date.now()

let searchTimeout = null

const Demo8 = () => {
  const [dataSource, setDataSource] = useState([])
  const handleSearch = value => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    searchTimeout = setTimeout(() => {
      value
        ? fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
            .then(response => response.json())
            .then(data => {
              const dataSource = data.result.map(item => ({
                label: item[0],
                value: (timestamp++).toString(36),
              }))
              setDataSource(dataSource)
            })
        : setDataSource(dataSource)
    }, 100)
  }

  return (
    <div className="demo-container">
      <Select
        showSearch
        placeholder="select search"
        filterLocal={false}
        dataSource={dataSource}
        onSearch={handleSearch}
        style={{ width: 200 }}
      />
    </div>
  )
}

export default Demo8
