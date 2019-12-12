import styled from 'styled-components'

/**
 * @public
 */
const Header = styled.h2`
  /* widget-normalize use class selector to reset css */
  && {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    padding: 0 16px;
    margin: 0;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    .header-select {
      margin-left: 16px;
    }
    .trigger-wrap {
      width: 16px;
      height: 16px;
      line-height: 16px;
      cursor: pointer;
      &:hover {
        background: #d6d6d6;
        .trigger-icon {
          color: #262626;
        }
      }
    }
    .trigger-icon {
      cursor: pointer;
      color: #757575;
    }
    .icon-up {
      color: #262626;
    }
    .drop-menu {
      /* min-width: 208px; */
      min-width: 100%;
    }
  }
`
export default Header
