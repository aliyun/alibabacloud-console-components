import RawPage from './Page'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Content from './Content'
import Menu from './Menu'
import './index.less'

/**
 * 我们通过Page的对象属性导出了其余的相关组件。
 * 不过，还是建议直接使用import `import { Header } from '$packageName$`。
 * @public
 */
export type IPage = typeof RawPage & {
  Header: typeof Header
  Breadcrumb: typeof Breadcrumb
  Content: typeof Content
  Menu: typeof Menu
}

/**
 * @public
 */
const Page: IPage = Object.assign(RawPage, {
  Header,
  Breadcrumb,
  Content,
  Menu,
})

export default Page
export { RawPage as Page, Breadcrumb, Header, Content, Menu }
export * from './Page'
export * from './Breadcrumb'
export * from './Header'
export * from './Content'
export * from './Menu'
