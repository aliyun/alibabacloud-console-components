/* eslint-disable */
// 收集所有文档的公共依赖，这些依赖在打包时剔除，渲染时由文档站点统一提供

// systemjs无法在SSR环境中使用
import 'systemjs/dist/system'
import 'systemjs/dist/extras/amd'

import '@alicloud/console-components/dist/wind.css'

const toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag
if (!toStringTag) {
  alert('您的浏览器不支持Symbol，请升级您的浏览器！')
}

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

import * as External10 from 'style-loader/dist/runtime/injectStylesIntoStyleTag.js'
// 让System.set走进这一行：https://github.com/systemjs/systemjs/blob/338acddf5927f6f5f0c077f000cd69c3781eee23/src/features/registry.js#L16
if (toStringTag) External10[toStringTag] = 'Module'
externalsObj[
  'style-loader/dist/runtime/injectStylesIntoStyleTag.js'
] = External10

import * as External11 from 'css-loader/dist/runtime/api.js'
if (toStringTag) External11[toStringTag] = 'Module'
externalsObj['css-loader/dist/runtime/api.js'] = External11
