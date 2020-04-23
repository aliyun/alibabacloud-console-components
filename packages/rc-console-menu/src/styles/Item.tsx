import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'

/**
 * @public
 */
const Item = styled(Nav.Item)`
  .next-menu-item-text {
    > a {
      display: inline;
    }
  }
`

export default Item
