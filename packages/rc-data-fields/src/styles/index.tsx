import styled from 'styled-components'
import { Grid } from '@alicloud/console-components'

const { Col } = Grid

export const SFieldItem = styled(Col)`
  margin: 0 0 8px 0;
  min-height: 20px;
  line-height: 20px;
`

export const SFieldLabel = styled(Col)`
  color: #555;
`

export const SFieldValue = styled(Col)`
  color: #333;
`
