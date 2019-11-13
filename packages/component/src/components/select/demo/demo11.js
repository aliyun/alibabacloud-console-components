import React, { useState } from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'
// import './demo11.less'

const { AutoComplete } = Select

const dataSource = [
  'Lucy King',
  'Lily King',
  'Jim Green',
  {
    label: 'Chinese',
    children: [
      { value: 'Hang Meimei', label: 'Hang Meimei' },
      'Li Lei',
      { value: 'Gao Hui', label: 'Gao Hui', disabled: true },
      'Zhang San',
      'Li Si',
      'Wang Wu',
      { value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true },
      'Sun Yang',
      'Song Shuying',
    ],
  },
  {
    label: 'Pets',
    children: ['Poly', 'Kitty'],
  },
]

const ctrlDataSources = {
  size: ['small', 'medium', 'large'],
  disabled: [true, false],
  hasClear: [true, false],
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

const Demo11 = () => {
  const [params, setParams] = useState({
    value: null,
    size: undefined,
    disabled: undefined,
    hasClear: undefined,
  })

  const handleCtrlChange = (key, value) => {
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
  }

  const handleChange = value => {
    console.log('handleChange: value: ', value)
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
      <AutoComplete
        {...params}
        style={{ maxWidth: 300 }}
        onChange={handleChange}
        dataSource={dataSource}
      />
    </Wrapper>
  )
}

export default Demo11
