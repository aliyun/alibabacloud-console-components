import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from '@alicloud/console-components'
import { ButtonProps } from '@alicloud/console-components/types/button'

export const SIcon = styled(Icon)``

interface IProps {
  reset: boolean
}

const ExtractPropsFC: React.FC<{ reset: boolean & ButtonProps }> = ({
  reset,
  ...restProps
}) => <Button {...restProps} />

export const SIconButton = styled(ExtractPropsFC)`
  &&&&& {
    ${(props) => {
      if (!props.reset) {
        return `
					width: 32px;
          padding: 0;
          text-align: center;
        `
      }
    }}

    ${SIcon} {
      display: inline-block;
      margin: 0 8px 0 ${(props) => (props.reset ? '0px' : '8px')};

      &:before {
        width: 12px;
        font-size: 12px;
        line-height: inherit;
        vertical-align: top;
      }
    }
  }
`
