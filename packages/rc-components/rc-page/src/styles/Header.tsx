import styled, { css } from 'styled-components'
import Partial from './Partial'
import { flexContainer, flexItem } from './utils'

export const headerHeight = 40

const titleStyles = css`
  display: inline-block;
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
  box-sizing: border-box;
  vertical-align: middle;
  margin: 0;
`

export const Title = styled.h3`
  /* widget-normalize use class selector to reset css */
  && {
    ${titleStyles};
    font-size: 28px;
    font-weight: 500;
    ${flexItem()};
    /* 设置overflow: hidden对于flex宽度的计算很重要，尤其是在title很长的情况下。
    它让此容器在计算flex宽度的时候不考虑其子节点，仅仅考虑剩余宽度。 */
    overflow-x: hidden;
  }
`

export const SubTitle = styled.h4`
  /* widget-normalize use class selector to reset css */
  && {
    ${titleStyles};
    font-size: 14px;
    font-weight: 400;
    color: #9b9ea0;
    padding: 0 16px;
    ${flexItem({ flexShrink: 0 })};
  }
`

/**
 * 仅当Title被截断时，我们允许Main和Title区域grow。
 * 如果在Title没被截断时，我们允许它们grow：
 * - Extra会永远靠右
 * - SubTitle就无法紧挨Title
 */
export const Main = styled.div<{ shouldGrow: boolean }>`
  ${({ shouldGrow }) => flexItem({ flexGrow: shouldGrow ? 1 : 0 })};
  ${flexContainer({
    flexWrap: 'nowrap',
    alignItems: 'center',
  })}
  overflow: hidden;
  ${Title} {
    flex-grow: ${({ shouldGrow }) => (shouldGrow ? 1 : 0)};
  }
`

export const Extra = styled.div`
  ${flexItem({ flexShrink: 0 })};
`

const Header = styled(Partial)<{ alignLeft: boolean }>`
  ${({ alignLeft }) =>
    flexContainer({
      justifyContent: alignLeft ? 'flex-start' : 'space-between',
    })}
  height: ${headerHeight}px;
  line-height: ${headerHeight}px;
`

export default Header

export const Topbar = styled(Partial)<{ alignLeft: boolean }>`
  ${({ alignLeft }) =>
    flexContainer({
      justifyContent: alignLeft ? 'flex-start' : 'space-between',
      alignItems: 'center',
    })}
`
export const TopbarMain = styled.div`
  ${flexItem()};
  /* widget-normalize use class selector to reset css */
  && {
    a {
      color: #666;
      color: var(--breadcrumb-text-color,#666);
    }
  }
`
export const TopbarExtra = styled.div`
  ${flexItem()};
`
