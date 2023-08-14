import styled from 'styled-components'
import { Grid } from '@alicloud/console-components'

const { Col } = Grid

const componentId = 'WindDataFieldCol'

export const SFieldItem = styled(Col).withConfig({
  componentId: `${componentId}1`,
} as any)`
  margin: 0 0 8px 0;
  min-height: 20px;
  line-height: 20px;
`

export const SFieldLabel = styled(Col).withConfig({
  componentId: `${componentId}2`,
} as any)`
  color: #555;
  color: var(--console-field-label, #555);
`

export const SFieldValue = styled(Col).withConfig({
  componentId: `${componentId}3`,
} as any)`
  color: #333;
  color: var(--console-field-value, #333);
`
