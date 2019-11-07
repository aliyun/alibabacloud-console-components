import React from 'react'
import List, { IDataItem } from '@alicloud/console-components-select-list/list'

const data: IDataItem[] = [
  {
    title: 'title1',
    description: 'content1 content1',
    selected: false,
  },
  {
    title: 'title2',
    description:
      'content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2 content2',
    selected: true,
  },
  {
    title: 'title3',
    description:
      'content3 content3 content3 content3 content3 content3 content3 ',
    selected: false,
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'title4',
    description:
      'content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4 content4',
    selected: false,
  },
]

const BasicDemo: React.FC = () => {
  return (
    <List
      data={data}
      style={{ width: '500px', marginLeft: '50px', marginTop: '50px' }}
    />
  )
}

export default BasicDemo
