import styled from 'styled-components'
import { baseClassName } from './constant'

const success = '#06B624'
const warning = '#FFCE03'
const error = '#F54745'
const disabled = '#D7D8D9'

const StyledWrapper = styled.span`
  .${baseClassName} {
    line-height: 24px;

    &-container {
      display: inline-block;
      text-align: center;
    }

    &-icon {

      &:before {
        width: auto !important;
        font-size: 12px !important;
      }

      &-success {
        color: ${success};
      }

      &-warning {
        color: ${warning};
      }

      &-error {
        color: ${error};
      }

      &-disabled {
        color: ${disabled};
      }
    }

    &-light {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;

      &-success {
        background: ${success};
      }

      &-warning {
        background: ${warning};
      }

      &-error {
        background: ${error};
      }

      &-disabled {
        background: ${disabled};
      }
    }

    &-text {
      display: inline-block;
      padding-left: 8px;

      &-disabled {
        color: ${disabled} - 30%;
      }
    }
  }
`

export default StyledWrapper
