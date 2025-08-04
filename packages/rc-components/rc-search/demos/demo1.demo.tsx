/**
 * @title 场景1
 */

import React, { useState } from 'react';
import { Search, SearchFilter } from '@alicloud/console-components-search';
import { ConfigProvider } from '@alicloud/console-components';

const options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      // placeholder: '按实例名称搜索',
      dataSource: [],
    },
  },
  {
    label: '网络类型',
    dataIndex: 'type',
    template: 'select',
    templateProps: {
      placeholder: '请选择网络类型',
      dataSource: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
        { label: 'D', value: 'd' },
      ],
    },
  },
  {
    label: '付费类型',
    dataIndex: 'pay',
    template: 'multiple',
    templateProps: {
      placeholder: '请选择付费类型',
      dataSource: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
        { label: 'D', value: 'd' },
      ],
    },
  },
];

const options2 = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '按实例名称搜索',
      dataSource: [],
    },
  },
];

const intl = (a) => a;

const options3 = [
  {
    dataIndex: 'SourceIp',
    label: intl('flow_analysis.prop.enum', { value: 'SourceIp' }),
    template: 'input',
    // groupName: intl('flow_analysis.prop.enum', { value: 'SourceIp' }),
    children: [
      {
        dataIndex: 'SourceIp_equal',
        label: intl('flow_analysis.prop.enum', { value: 'SourceIp_equal' }),
        template: 'input',
      }, {
        dataIndex: 'SourceIp_like',
        label: intl('flow_analysis.prop.enum', { value: 'SourceIp_like' }),
        template: 'input',
      },
      {
        dataIndex: 'SourceIp_notlike',
        label: intl('flow_analysis.prop.enum', { value: 'SourceIp_notlike' }),
        template: 'input',
        // groupName: intl('flow_analysis.prop.enum', { value: 'SourceIp' }),
      },
    ],
  },
  {
    dataIndex: 'DestinationIp_equal',
    label: intl('flow_analysis.prop.enum', { value: 'DestinationIp_equal' }),
    labelEx: (
      <div>
        <span>
          {intl('flow_analysis.prop.enum', { value: 'DestinationIp_equal' })}
        </span>
        <span>
          {intl('tr_flow_log.search.operator.enum', { value: 'equal' })}
        </span>
      </div>
    ),
    template: 'input',
    groupName: intl('flow_analysis.prop.enum', { value: 'DestinationIp' }),
  },
  {
    dataIndex: 'DestinationIp_like',
    label: intl('flow_analysis.prop.enum', { value: 'DestinationIp_like' }),
    labelEx: (
      <div>
        <span>
          {intl('flow_analysis.prop.enum', { value: 'DestinationIp_like' })}
        </span>
        <span>
          {intl('tr_flow_log.search.operator.enum', { value: 'like' })}
        </span>
      </div>
    ),
    template: 'input',
    groupName: intl('flow_analysis.prop.enum', { value: 'DestinationIp' }),
  },
  {
    dataIndex: 'DestinationIp_notlike',
    label: intl('flow_analysis.prop.enum', { value: 'DestinationIp_notlike' }),
    labelEx: (
      <div>
        <span>
          {intl('flow_analysis.prop.enum', { value: 'DestinationIp_notlike' })}
        </span>
        <span>
          {intl('tr_flow_log.search.operator.enum', { value: 'notlike' })}
        </span>
      </div>
    ),
    template: 'input',
    groupName: intl('flow_analysis.prop.enum', { value: 'DestinationIp' }),
  },
  {
    dataIndex: 'Dscp',
    label: intl('flow_analysis.prop.enum', { value: 'Dscp' }),
    template: 'input',
    groupName: intl('flow_analysis.prop.enum', { value: 'Dscp' }),
  },
  {
    dataIndex: 'Protocol',
    label: intl('flow_analysis.prop.enum', { value: 'Protocol' }),
    template: 'select',
    templateProps: {
      dataSource: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 62, 64, 65, 66, 67, 69, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
        97, 98, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 115, 116, 117,
        118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135,
        136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 255,
      ].map((item) => ({
        label: intl('flow_analyzer.detail.protocol.enum', { value: item }),
        value: String(item),
      })),
    },
    groupName: intl('flow_analysis.prop.enum', { value: 'Protocol' }),
  },
  {
    dataIndex: 'DestinationPort',
    label: intl('flow_analysis.prop.enum', { value: 'DestinationPort' }),
    template: 'input',
    groupName: intl('flow_analysis.prop.enum', { value: 'DestinationPort' }),
  },
  {
    dataIndex: 'SourcePort',
    label: intl('flow_analysis.prop.enum', { value: 'SourcePort' }),
    template: 'input',
    groupName: intl('flow_analysis.prop.enum', { value: 'SourcePort' }),
  },
];


const Demo1: React.FC<{}> = (props) => {
  const [filters, setFilters] = useState<any>([
    { label: '实例名称', value: 'xxxxxx', dataIndex: 'name' },
    { value: [{ tagKey: 'test', tagValue: '' }], dataIndex: 'tag' },
    { value: [{ tagKey: 'test', tagValue: '' }], dataIndex: 'tag2' },
  ]);
  return (
    <ConfigProvider>
      <div>
        <div>默认固定搜索条件</div>
        <Search
          defaultDataIndex="name"
          defaultSelectedDataIndex="name"
          options={[{
            label: '实例名称',
            dataIndex: 'name',
            template: 'input',
            templateProps: {
              placeholder: '按实例名称搜索',
            },
          }]}
          onSearch={(value, dataIndex) => {
            console.log(value, dataIndex);
          }}
        />
        <br /><br />
        <Search
          defaultDataIndex="name"
          options={options2}
          onSearch={(value, dataIndex) => {
            console.log(value, dataIndex);
          }}
          suggestions={[{ label: '实例名称', children: ['222222'] }, '33333333']}
        />
        <br /><br />

        <div>搜索条件成组</div>
        <Search
          defaultDataIndex="name"
          defaultSelectedDataIndex="name"
          options={options}
          onSearch={(value, dataIndex, extra) => {
            // @ts-ignore
            setFilters([...filters, extra]);
          }}
          suggestions={[{ label: '实例名称', children: ['222222'] }, '33333333']}
        />
        <Search
          defaultDataIndex="name"
          // defaultSelectedDataIndex="name"
          options={options3}
          prefixSelectMode="cascader"
          onSearch={(value, dataIndex, extra) => {
            console.log(value, dataIndex, extra);
            // @ts-ignore
            setFilters([...filters, extra]);
          }}
          suggestions={[{ label: '实例名称', children: ['222222'] }, '33333333']}
        />

        <div style={{ marginTop: 8 }}>
          <SearchFilter
            dataSource={filters}
            onChange={(deletedFilter, remainFilters) => {
              setFilters(remainFilters);
            }}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Demo1;
