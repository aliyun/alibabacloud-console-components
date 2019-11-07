/**
 * 我们没有从index.js export CompatibleMenu 和 RoutableMenu。
 * 因为这两个组件依赖于peerDependency: dva。
 * 如果我们在index.js中引入这两个组件，那么**即使用户没有import这两个组件**，
 * webpack在构建依赖树的时候也必须解析到用户安装的dva及其递归依赖，
 * 否则会报错。
 * 换句话说：即使用户不使用 CompatibleMenu 和 RoutableMenu，他也必须自己安装dva。
 *
 * 为了避免上述情况，我们不在index.js export CompatibleMenu 和 RoutableMenu，
 * 而是在根目录下用两个文件分别export它们。
 * 如果用户想使用CompatibleMenu，他要这么做:
 * 1. yarn add dva 因为CompatibleMenu依赖dva
 * 2. `import CompatibleMenu from '@alicloud/console-components-console-menu/CompatibleMenu'`
 * RoutableMenu同理。
 * 注：为什么不直接让用户：
 * `import CompatibleMenu from '@alicloud/console-components-console-menu/es/CompatibleMenu'`
 * 因为我们不希望用户依赖于我们的内部目录结构`es`，未来我们可能把构建结果放在`esnext`。
 *
 * 如果用户不使用这两个特殊组件，那么他可以直接
 * `import ConsoleMenu from '@alicloud/console-components-console-menu'`，不用安装dva。
 */

import RoutableMenu from './es/RoutableMenu'

export default RoutableMenu
