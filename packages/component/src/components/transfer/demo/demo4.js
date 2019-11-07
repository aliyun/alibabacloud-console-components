import React from 'react'
import { Transfer } from '@alicloud/console-components'

const getDataSource = () => {
  const result = []

  for (let i = 0; i < 10; i++) {
    result.push({
      label: i % 3 === 0 ? `content${i}contentcontentcontentcontentcontent` : `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    })
  }

  return result
}

const handleChange = (value, data, extra) => { console.log(value, data, extra) }

const Demo4 = () => (
  <div>
    <Transfer 
      defaultValue={['3']} 
      dataSource={getDataSource()} 
      listStyle={{ width: '200px', height: '192px' }} 
      defaultLeftChecked={['1']} 
      onChange={handleChange} 
      titles={['Source', 'Target']} 
      operations={['>>', '<<']} 
    />
  </div>
)

export default Demo4
