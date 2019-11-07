import styled from 'styled-components'

/**
 * @public
 */
const Header = styled.h2`
  /* widget-normalize use class selector to reset css */
  && {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    padding: 0 16px;
    margin: 0;
    line-height: 18px;
  }
`

export default Header
