import React, { useState } from 'react'
import { Select } from '@alicloud/console-components'
import fetchJsonp from 'fetch-jsonp'
import styled from 'styled-components'
// import './demo12.less'

const { AutoComplete } = Select

let searchTimeout

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
`

const Demo12 = () => {
  const [dataSource, setDataSource] = useState([])

  const handleChange = value => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
        .then(response => response.json())
        .then(data => {
          const dataS = data.result.map(item => item[0])
          setDataSource(dataS)
        })
    }, 100)
  }

  return (
    <Wrapper>
      <AutoComplete
        filterLocal={false}
        placeholder="search from taobao"
        onChange={handleChange}
        dataSource={dataSource}
      />
    </Wrapper>
  )
}

export default Demo12

// import React, { Component } from 'react'
// import { Select } from '@alicloud/console-components'
// import fetchJsonp from 'fetch-jsonp'
// import './demo12.less'

// const { AutoComplete } = Select

// export default class Demo12 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       dataSource: [],
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange = value => {
//     clearTimeout(this.searchTimeout)
//     this.searchTimeout = setTimeout(() => {
//       fetchJsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`)
//         .then(response => response.json())
//         .then(data => {
//           const dataSource = data.result.map(item => item[0])
//           this.setState({ dataSource })
//         })
//     }, 100)
//   }

//   render() {
//     return (
//       <div className="select-demo12-container">
//         <AutoComplete
//           filterLocal={false}
//           placeholder="search from taobao"
//           onChange={this.handleChange}
//           dataSource={this.state.dataSource}
//         />
//       </div>
//     )
//   }
// }
