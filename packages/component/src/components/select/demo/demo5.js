import React, { useState, useCallback } from 'react'
import { Select } from '@alicloud/console-components'
import styled from 'styled-components'

const provinceDataSource = ['Zhejiang', 'Hubei', 'Jiangsu']
const cityDataSource = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Hubei: ['Wuhan', 'Yichang', 'Jingzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
}

const SWrapper = styled.div`
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
    const cities = cityDataSource[value]
    setCityData(cities)
    setProvince(value)
    setCity(undefined)
    setDisabled(!cities)
  }, [])

  const handleCityChange = useCallback(value => {
    setCity(value)
  }, [])

  return (
    <SWrapper>
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
    </SWrapper>
  )
}
export default Demo5

export const demoMeta = {
  zhName: `级联选择`,
  zhDesc: `使用 Select 构建级联选择框`,
}
