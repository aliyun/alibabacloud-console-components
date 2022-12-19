/**
* @title basic
*/

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
  const [selectedIds1, setSelectedIds1] = useState<string[]>([])
  const [selectedIds2, setSelectedIds2] = useState<string[]>([])

  return (
    <>
      <div style={{ padding: '10px 10px 400px' }}>
        单选：
        <ListSelect
          dataSource={allData}
          mode="single"
          selectedIds={selectedIds1}
          onSelectChange={setSelectedIds1}
          selectProps={{
            popupStyle: { width: '500px' },
            style: { width: '300px' },
          }}
        />
      </div>
      <div style={{ padding: '10px 10px 400px' }}>
        多选：
        <ListSelect
          dataSource={allData}
          mode="multiple"
          selectedIds={selectedIds2}
          onSelectChange={setSelectedIds2}
          selectProps={{
            popupStyle: { width: '500px' },
            style: { width: '300px' },
          }}
        />
      </div>
    </>
  )
}

export default SelectDemo
