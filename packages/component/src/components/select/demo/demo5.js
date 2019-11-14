import React, { useState, useCallback } from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'

const provinceDataSource = ['Zhejiang', 'Hubei', 'Jiangsu']
const cityDataSource = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
  .next-select {
    margin-right: 10px;
  }
`

const Demo5 = () => {
  const [cityData, setCityData] = useState([])
  const [province, setProvince] = useState(undefined)
  const [city, setCity] = useState(undefined)
  const [disabled, setDisabled] = useState(true)

  const handleProvinceChange = useCallback(value => {
    const citys = cityDataSource[value]
    setCityData(citys)
    setProvince(value)
    setDisabled(!citys)
  }, [])

  const handleCityChange = useCallback(value => {
    setCity(value)
  }, [])

  return (
    <Wrapper>
      <Select
        placeholder="Select Province"
        dataSource={provinceDataSource}
        value={province}
        onChange={handleProvinceChange}
      />
      <Select
        placeholder="Select City"
        dataSource={cityData}
        value={city}
        onChange={handleCityChange}
        disabled={disabled}
      />
    </Wrapper>
  )
}
export default Demo5
