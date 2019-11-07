/**
 * UMD版本的打包入口，UMD必须打包**所有**代码，包括RoutableMenu
 */
import defaultExport from './index'
import RoutableMenu from './RoutableMenu'

export default defaultExport
export * from './index'
export { RoutableMenu }
