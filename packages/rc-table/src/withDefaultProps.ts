import defaultProps from 'recompose/defaultProps'
import { ITableProps } from './index'

const withDefaultProps = defaultProps<ITableProps>({
  // Follow UE/UI standard
  hasBorder: false,
})

export default withDefaultProps
