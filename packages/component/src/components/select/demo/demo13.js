import React, { useState } from 'react'
import { Select, Icon } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'
import styled from 'styled-components'
import './demo13.less'

const { AutoComplete } = Select

let searchTimeout

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  p {
    margin-top: 0;
  }
  .next-select {
    margin-right: 10px;
    vertical-align: middle;
  }
`

const Demo13 = () => {
  const [dataSource, setDataSource] = useState([])

  const handleChange = value => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    searchTimeout = setTimeout(() => {
      fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
        .then(response => response.json())
        .then(data => {
          const newDataSource = data.result.map(item => {
            return {
              label: (
                <div>
                  <Icon type="picture" size="small" />
                  &nbsp;{item[0]}
                </div>
              ),
              value: item[1],
              originLabel: item[0],
            }
          })
          setDataSource(newDataSource)
        })
    }, 100)
  }

  return (
    <Wrapper>
      <AutoComplete
        onChange={handleChange}
        filterLocal={false}
        fillProps="originLabel"
        placeholder="search from taobao"
        dataSource={dataSource}
      />
    </Wrapper>
  )
}
export default Demo13
