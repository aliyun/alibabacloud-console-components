import React from 'react'
import { Select, Balloon } from '@alicloud/console-components'
import styled from 'styled-components'

const { Tooltip } = Balloon

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true },
  {
    label: 'Special Group',
    children: [
      { value: -1, label: 'FALSE' },
      { value: 0, label: 'ZERO' },
    ],
  },
]

function handleChange(value) {
  console.log(value)
}

const maxTagPlaceholder = (selectedValues, totalValues) => {
  const trigger = (
    <span>{`${selectedValues.length}/${totalValues.length}`}</span>
  )
  const labels = selectedValues.map(obj => obj.label)
  return <Tooltip trigger={trigger}>{labels.join(', ')}</Tooltip>
}

const Demo4 = () => (
  <div>
    <STitle>hasSelectAll:</STitle>
    <Select
      hasSelectAll
      mode="multiple"
      onChange={handleChange}
      dataSource={dataSource}
      style={{ width: 200 }}
    />
    <STitle>maxTagCount=2:</STitle>
    <Select
      maxTagCount={2}
      defaultValue={['10001', '10002', '-1']}
      mode="multiple"
      onChange={handleChange}
      dataSource={dataSource}
      style={{ width: 200 }}
    />
    <STitle>maxTagPlaceholder:</STitle>
    <Select
      maxTagCount={2}
      maxTagPlaceholder={maxTagPlaceholder}
      defaultValue={['10001', '10002', '-1']}
      mode="multiple"
      onChange={handleChange}
      dataSource={dataSource}
      style={{ width: 200 }}
    />
    <STitle>tagInline:</STitle>
    <Select
      maxTagCount={2}
      tagInline
      mode="multiple"
      defaultValue={['10001', '10002', '-1']}
      onChange={handleChange}
      dataSource={dataSource}
      style={{ width: 200 }}
    />
    <STitle>maxTagPlaceholder:</STitle>
    <Select
      maxTagCount={2}
      tagInline
      maxTagPlaceholder={maxTagPlaceholder}
      defaultValue={['10001', '10002', '-1']}
      mode="multiple"
      onChange={handleChange}
      dataSource={dataSource}
      style={{ width: 200 }}
    />
  </div>
)

export default Demo4

export const demoMeta = {
  zhName: `最大数量`,
  zhDesc: `多选模式`,
}

const STitle = styled.h4`
  margin-top: 15px;
`
