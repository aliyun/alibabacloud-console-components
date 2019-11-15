import React, { useState, useRef } from 'react'
import { Select } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'

let timestamp = Date.now()

const Demo8 = () => {
  const searchTimeout = useRef(null)
  const [dataSource, setDataSource] = useState([])
  const handleSearch = value => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }
    searchTimeout.current = setTimeout(() => {
      if (value) {
        fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
          .then(response => response.json())
          .then(data => {
            const newDataSource = data.result.map(item => ({
              label: item[0],
              value: (timestamp++).toString(36),
            }))
            setDataSource(newDataSource)
          })
      } else {
        setDataSource([])
      }
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
