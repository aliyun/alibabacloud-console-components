import React from 'react'
import styled from 'styled-components'
import { Grid } from '@alicloud/console-components'

const { Col } = Grid

const WindCol: React.FC<React.ComponentProps<typeof Col>> = (props) => {
  return <Col {...props} />
}

WindCol.displayName = 'WindDataFieldCol'

export const SFieldItem = styled(WindCol)`
  margin: 0 0 8px 0;
  min-height: 20px;
  line-height: 20px;
`

export const SFieldLabel = styled(WindCol)`
  color: #555;
`

export const SFieldValue = styled(WindCol)`
  color: #333;
`
