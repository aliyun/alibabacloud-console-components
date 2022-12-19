import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'
import { getPriority } from '../utils'
import { vars } from '../theme'

/**
 * @public
 */
const Divider = styled((Nav as any).Divider)`
  ${getPriority(5)} {
    margin-top: ${vars['--console-menu-divider-margin'].consumeStyled};
    margin-bottom: ${vars['--console-menu-divider-margin'].consumeStyled};
    border-bottom: ${vars['--console-menu-divider-border'].consumeStyled};
  }
`

export default Divider
