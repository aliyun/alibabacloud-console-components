import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'

/**
 * @public
 */
const SubMenu = styled(Nav.SubNav)`
  /* 键盘focus时变为hover态 */
  > div:focus-visible {
    --console-menu-bg: var(--console-menu-hover-bg, #f7f9fa);
  }
`

export default SubMenu
