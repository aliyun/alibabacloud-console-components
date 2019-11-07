import styled from 'styled-components'

export const SMask = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #373737;
  background-color: rgba(55, 55, 55, 0.6);
  opacity: 0;
  transition: all 0.25s ease-out;

  &.is-active {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
`

export const SPanelsWrapper = styled.div<{
  top: string | number
  isShowing: boolean
}>`
  z-index: 101;
  background: #fff;
  position: fixed;
  right: 0;
  bottom: 0;
  top: ${({ top }) => (typeof top === 'number' ? `${top}px` : top)};
  /* 如果panelsCount === 0 则通过translateX隐藏到右侧 */
  transform: ${({ isShowing }) =>
    isShowing ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.25s ease-out;
`
