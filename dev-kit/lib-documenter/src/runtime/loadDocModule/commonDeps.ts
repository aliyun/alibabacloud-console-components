// 收集所有文档的公共依赖，这些依赖在打包时剔除，渲染时由文档站点统一提供

// systemjs无法在SSR环境中使用
import 'systemjs/dist/system'
import 'systemjs/dist/extras/amd'

import '@alicloud/console-components/dist/wind.css'

const externalsObj = {}
export default externalsObj

import * as External0 from '@mdx-js/react'
externalsObj['@mdx-js/react'] = External0

import * as External1 from 'react'
externalsObj['react'] = External1

import * as External2 from '../TypescriptMetadataRenderer/interface'
externalsObj['@runtime/TypescriptMetadataRenderer/interface'] = External2

import * as External3 from '../DemoRenderer'
externalsObj['@runtime/DemoRenderer'] = External3

import * as External4 from 'styled-components'
externalsObj['styled-components'] = External4

import * as External5 from '../MdxWrapper'
externalsObj['@runtime/MdxWrapper'] = External5

import * as External6 from 'prop-types'
externalsObj['prop-types'] = External6

import * as External7 from '@alicloud/console-components'
externalsObj['@alicloud/console-components'] = External7
externalsObj['wind'] = External7

import * as External8 from 'react-dom'
externalsObj['react-dom'] = External8

import * as External9 from '@alicloud/console-components-fake-browser'
externalsObj['@alicloud/console-components-fake-browser'] = External9
