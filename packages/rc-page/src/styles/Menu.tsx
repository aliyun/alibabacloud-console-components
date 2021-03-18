import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'

export const Item = styled(Nav.Item)``
export const Group = styled(Nav.Group)``
export const PopupItem = styled(Nav.PopupItem)``
export const SubMenu = styled(Nav.SubNav)``

// page组件本身已经有padding-left，因此要抵消掉Nav自己的padding-left
const Menu = styled(Nav)`
  &&& {
    margin-left: -20px;
    margin-left: calc(-1 * var(--nav-ver-item-padding-lr, 20px));
  }
`

export default Menu

export const IntersectionGuard = styled.div`
  position: absolute;
  height: 12px;
  top: -20px;
`

const getAdjustedHeight = (value?: number | string): number => {
  if (typeof value === 'number') {
    return value
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // this is executed in SSR
    // document is not defined
    return 0
  }

  if (typeof value === 'string') {
    const elem = document.getElementById(value) || document.querySelector(value)

    if (elem && elem.offsetHeight) {
      return elem.offsetHeight
    }
  }

  return 0
}

export interface IIntersectionContainerProps {
  adjustHeight?: number | string
  isIntersecting?: boolean
}

const stickyIfNonIntersecting = (props: IIntersectionContainerProps): string =>
  props.isIntersecting
    ? ''
    : `
    position: sticky;
    top: 0;
    overflow-y: auto;
    height: calc(100vh - ${getAdjustedHeight(props.adjustHeight)}px);
  `

export const IntersectionContainer = styled.div<IIntersectionContainerProps>`
  height: 100%;
  ${stickyIfNonIntersecting};

  .next-menu {
    height: 100%;
  }
`
