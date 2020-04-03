/* eslint-disable */

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// @alicloud/console-components-lib-documenter 的loadDocModule模块包含了systemjs，不能在SSR环境中使用
// 因此在gatsby-browser引它，把loadDocModule挂载到window上
import loadDocModule from '@runtime/loadDocModule'

export const onClientEntry = () => {
  window.loadDocModule = loadDocModule
}
