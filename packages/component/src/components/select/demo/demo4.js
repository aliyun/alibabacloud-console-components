import React, { useState, useCallback } from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true },
  {
    label: 'Special Group',
    children: [
      { value: new Date(), label: 'new Date()' },
      { value: false, label: 'FALSE' },
      { value: 0, label: 'ZERO' },
    ],
  },
]

const ctrlDataSources = {
  mode: ['single', 'multiple', 'tag'],
  size: ['small', 'medium', 'large'],
  showSearch: [true, false],
  hasArrow: [true, false],
  hasBorder: [true, false],
}

const Wrapper = styled.div`
  padding: 16px;
  background-color: #f8f8f8;
`

const Controller = styled.div`
  padding: 12px 12px 4px;
  margin-bottom: 16px;
  border: 2px dashed #ddd;
  .next-select {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`

const Demo4 = () => {
  const [params, setParams] = useState({
    value: null,
    size: undefined,
    mode: undefined,
    hasArrow: undefined,
    hasBorder: undefined,
    showSearch: undefined,
  })

  const handleCtrlChange = useCallback(
    (key, value) => {
      if (key === 'mode') {
        setParams({
          ...params,
          [key]: value,
          value: null,
        })
      } else {
        setParams({
          ...params,
          [key]: value,
        })
      }
    },
    [params]
  )

  const handleChange = (value, item) => {
    console.log('handleChange: value: ', value, item)
    setParams({
      ...params,
      value,
    })
  }

  const renderCtrlNodes = state => {
    const ctrlNodes = Object.keys(ctrlDataSources).map(k => (
      <Select
        key={k}
        label={`${k}: `}
        value={state[k]}
        dataSource={ctrlDataSources[k]}
        onChange={item => handleCtrlChange(k, item)}
      />
    ))
    return ctrlNodes
  }

  return (
    <Wrapper>
      <Controller>{renderCtrlNodes(params)}</Controller>
      <Select {...params} onChange={handleChange} dataSource={dataSource} />
    </Wrapper>
  )
}

export default Demo4
