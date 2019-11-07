import styled from 'styled-components'
import { Nav } from '@alicloud/console-components'

export const Item = styled(Nav.Item)``
export const Group = styled(Nav.Group)``
export const PopupItem = styled(Nav.PopupItem)``
export const SubMenu = styled(Nav.SubNav)``

const Menu = styled(Nav)`
  &&& {
    ${Item} {
      padding: 0 16px 0 0;
    }
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
    overflow-y: scroll;
    height: calc(100vh - ${getAdjustedHeight(props.adjustHeight)}px);
  `

export const IntersectionContainer = styled.div<IIntersectionContainerProps>`
  height: 100%;
  ${stickyIfNonIntersecting};

  .next-menu {
    height: 100%;
  }
`
