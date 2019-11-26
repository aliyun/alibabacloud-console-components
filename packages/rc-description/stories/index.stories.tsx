import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ConsoleDescription from '../src/index'

const items = [
  {
    label: '实例 ID',
    dataIndex: 'InstanceId',
  },
  {
    label: '地域',
    dataIndex: 'RegionId',
    visible: false,
  },
  {
    label: '规格',
    dataIndex: 'Config',
    visible: (value) => value === 'xxxxx1',
  },
  {
    label: '创建时间',
    dataIndex: 'CreatedDate',
    visible: (value, dataSource) => dataSource.RegionId === 'cn-hanghou',
  },
]

const dataSource = {
  InstanceId: 'rds-xxxxx',
  RegionId: 'cn-hanghou',
  Config: 'xxxxx',
  CreatedDate: '2019-10-10',
}

storiesOf('ConsoleDescription', module)
  .add('ConsoleDescription', () => {
   return (<div id="app-wrapper">
      <div id="app">
       <ConsoleDescription
         title="实例详情"
         items={items}
         dataSource={dataSource}
        />
      </div>
    </div>);
  })
