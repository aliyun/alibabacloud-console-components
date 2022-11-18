/**
 * @title basic
 */

import React, { Fragment } from 'react'
import '@alicloud/console-components/dist/wind.css'
import { Icon } from '@alicloud/console-components'
import DataFields, {
  IDataFieldsProps,
} from '@alicloud/console-components-data-fields'

const dataSource: IDataFieldsProps['dataSource'] = {
  name: 'React',
  version: '16.5.0',
  license: 'MIT',
  description:
    "React is a JavaScript library for creating user interfaces. The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments. Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the production build when deploying your application.",
  github: 'https://github.com/facebook/react/',
  npm: 'https://www.npmjs.com/package/react',
  installation: 'npm install react --save',
}

const items: IDataFieldsProps['items'] = [
  {
    dataIndex: 'name',
    render: (val) => <h1>{val}</h1>,
    span: 24,
  },
  {
    dataIndex: 'version',
    label: '版本',
  },
  {
    dataIndex: 'license',
    label: '协议类型',
    render: (val) => (
      <Fragment>
        <span style={{ fontStyle: 'italic', fontWeight: 600 }}>{val}</span>
        <Icon type="help" size="xs" style={{ marginLeft: '16px' }} />
      </Fragment>
    ),
  },
  {
    dataIndex: 'description',
    label: '描述',
    span: 24,
  },
  {
    label: '相关地址',
    render: (val, { github, npm }) => (
      <Fragment>
        {github && <a href={github}>github</a>}
        {npm && (
          <a href={npm} style={{ marginLeft: 8 }}>
            NPM
          </a>
        )}
      </Fragment>
    ),
    style: {
      lineHeight: '24px',
    },
  },
  {
    dataIndex: 'installation',
    label: '安装',
    render: (val) => <code style={{ fontSize: 16 }}>{val}</code>,
    span: 24,
    style: {
      lineHeight: '24px',
    },
  },
]

const Basic: React.FC<{}> = () => {
  return <DataFields dataSource={dataSource} items={items} />
}

export default Basic
