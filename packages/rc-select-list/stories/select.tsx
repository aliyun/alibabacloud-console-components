import React, { useState } from 'react'
import ListSelect, { ISelectDataItem } from '@alicloud/console-components-select-list'

const allData: ISelectDataItem[] = [
  {
    id: 'id1',
    title: 'title1',
    description: 'content1 content1 123',
  },
  {
    id: 'id2',
    title: 'title2',
    description:
      'content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 124',
  },
  {
    id: 'id3',
    title: 'title3',
    description:
      'content3 content3 content3 content3 content3 content3 content3 234',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 'id4',
    title: 'title4',
    description:
      'content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 235',
  },
]

const SelectDemo: React.FC = () => {
  const [filteredData, setFilteredData] = useState(allData)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  return (
    <div style={{ padding: '10px 10px 400px' }}>
      <ListSelect
        dataSource={filteredData}
        mode="single"
        selectedIds={selectedIds}
        onSelectChange={setSelectedIds}
        selectProps={{
          popupStyle: { width: '500px' },
          style: { width: '300px' },
        }}
        onSearchChange={(searchStr: string) => {
          setFilteredData(
            allData.filter(item => {
              let keep = false
              if (
                typeof item.title === 'string' &&
                item.title.indexOf(searchStr) >= 0
              )
                keep = true
              if (
                typeof item.id === 'string' &&
                item.id.indexOf(searchStr) >= 0
              )
                keep = true
              if (
                typeof item.description === 'string' &&
                item.description.indexOf(searchStr) >= 0
              )
                keep = true
              return keep
            })
          )
        }}
      />
    </div>
  )
}

export default SelectDemo
