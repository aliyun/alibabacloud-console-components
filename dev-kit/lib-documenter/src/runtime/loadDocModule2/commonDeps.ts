/* eslint-disable */
// 收集所有文档的公共依赖，这些依赖在打包时剔除，渲染时由文档站点统一提供

// import '@alicloud/console-components/dist/wind.css'

const externalsObj = {}
export default externalsObj

import * as mdx from '@mdx-js/react'
externalsObj['@mdx-js/react'] = mdx

import * as react from 'react'
externalsObj['react'] = react

import * as styled from 'styled-components'
externalsObj['styled-components'] = styled

import * as propsTypes from 'prop-types'
externalsObj['prop-types'] = propsTypes

import * as reactDom from 'react-dom'
externalsObj['react-dom'] = reactDom

// import * as External9 from '@alicloud/console-components-fake-browser'
// externalsObj['@alicloud/console-components-fake-browser'] = External9

