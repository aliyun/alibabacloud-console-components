import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'

/**
 * @public
 */
const Item = styled(Nav.Item)`
  /* 键盘focus时变为hover态 */
  :focus-visible {
    --console-menu-bg: var(--console-menu-hover-bg, #f7f9fa);
  }
`

export default Item
