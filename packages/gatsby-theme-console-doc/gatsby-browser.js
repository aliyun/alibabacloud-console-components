/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import prepareImportForDocModule from '@alicloud/console-components-lib-documenter/PrepareForLoadingDocModule'

export const onClientEntry = () => {
  window.prepareImportForDocModule = prepareImportForDocModule
}
