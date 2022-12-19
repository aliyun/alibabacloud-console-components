import { SplitButton as NextSplitButton } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import HOC from '../utils/popupHoc'

const SplitButton: typeof NextSplitButton = HOC(NextSplitButton) as any;

hoistNonReactStatics(SplitButton, NextSplitButton)

export default SplitButton
