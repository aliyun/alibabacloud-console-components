import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'
import { getPriority } from '../utils'

/**
 * @public
 */
const Divider = styled((Nav as any).Divider)`
  ${getPriority(5)} {
    margin-top: var(--console-menu-divider-margin, 15px);
    margin-bottom: var(--console-menu-divider-margin, 15px);
  }
`

export default Divider
