import styled from 'styled-components'
import MenuSelect from '@alicloud/console-components-menu-select'

export const SMenuSelect = styled(MenuSelect)`
  &.wind-breadcrumb-select {
    .wind-menu-select-inner {
      height: 16px;
      line-height: 16px;
    }
    .trigger-icon-wrap {
      &:hover {
        .trigger-icon {
          color: #555555;
        }
      }
      .trigger-icon {
        color: #888888;
        transform: scale(0.8);
      }
    }
    .select-label {
      cursor: pointer;
      max-width: 142px;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        color: #0070cc;
      }
    }
  }
`
