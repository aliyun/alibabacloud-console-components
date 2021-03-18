import styled from 'styled-components'
import { baseClassName } from './constant'

const success = '#1E8E3E'
const warning = '#FFC440'
const error = '#D93026'
const disabled = '#D7D8D9'

const StyledWrapper = styled.span`
  line-height: 1.27;
  .${baseClassName} {
    line-height: 24px;

    &-container {
      display: inline-block;
      text-align: center;
    }

    &-icon {
      vertical-align: top;

      &:before {
        vertical-align: top;
        width: auto !important;
        font-size: 8px !important;
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
    }
  }
`

export default StyledWrapper
