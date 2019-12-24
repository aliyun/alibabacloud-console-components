import React from 'react'
import styled from 'styled-components'

const EmbededTable = ({ children }) => {
  return (
    <SEmbededTable className="wind-embeded-table-wrapper">
      {children}
    </SEmbededTable>
  )
}

export default EmbededTable

const SEmbededTable = styled.div`
  padding: 16px 24px;
  background: #ebebeb;
`
