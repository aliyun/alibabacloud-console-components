import React from 'react'
import { Transfer } from '@alicloud/console-components'

const getDataSource = () => {
  const result = []

  for (let i = 0; i < 10; i++) {
    result.push({
      label: `content${i}`,
      value: `${i}`,
    })
  }

  return result
}

const handleChange = (value, data, extra) => { console.log(value, data, extra) }

const Demo1 = () => (
  <div>
    <Transfer
      defaultValue={['3']}
      defaultLeftChecked={['1']}
      dataSource={getDataSource()}
      onChange={handleChange}
      titles={['Rightable', 'Leftable']}
    />
  </div>
)

export default Demo1
