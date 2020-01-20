/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// @alicloud/console-components-lib-documenter/loadDocModule
// 模块中包含了systemjs，后者不能在SSR环境中使用
// 因此在gatsby-browser引它，把loadDocModule挂载到window上
import loadDocModule from '@alicloud/console-components-lib-documenter/loadDocModule'

export const onClientEntry = () => {
  window.loadDocModule = loadDocModule
}
